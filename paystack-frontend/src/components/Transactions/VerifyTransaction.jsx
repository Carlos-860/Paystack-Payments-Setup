import React, { useState } from "react";

function VerifyTransaction() {
    const [data, setData] = useState(null);

    const [reference, set_reference] = useState("");

    const verifyTransaction = async () => {
        try {
            const response = await fetch(
                "https://api.paystack.co/transaction/verify/" + reference,
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
                    },
                }
            );
            const json = await response.json();
            setData(json);
        } catch (err) {
            setData(err);
        }
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>Verify Transaction</h2>
                <p>Confirm the status of a transaction</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Reference </label>
                    <input
                        value={reference}
                        onChange={(e) => set_reference(e.target.value)}
                    />
                </div>

                <button onClick={verifyTransaction}>Verify Transaction</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default VerifyTransaction;
