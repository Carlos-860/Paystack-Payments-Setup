import React, { useState } from "react";

function TransactionTotals() {
    const [response, setResponse] = useState(null);

    const transactionTotals = async () => {
        const response = await fetch(
            "https://api.paystack.co/transaction/totals",
            {
                method: "GET",
                headers: {
                    Authorization:
                        `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
                },
            }
        );
        const json = await response.json();
        setResponse(json);
    };

    return (
        <div>
            <h3>Transaction Totals</h3>

            <p>
                <small>Total amount received on your account</small>
            </p>

            <button onClick={transactionTotals}>Transaction Totals</button>

            {response && <pre>{JSON.stringify(response, undefined, 2)}</pre>}
        </div>
    );
}

export default TransactionTotals;
