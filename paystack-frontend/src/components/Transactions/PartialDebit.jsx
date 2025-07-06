import React from "react";
import { useState } from "react";

function PartialDebit() {
    const [response, setResponse] = useState(null);
    const authorization_code = "AUTH_b9swm1ih98";

    const partialDebit = async () => {
        const response = await fetch(
            "https://api.paystack.co/transaction/partial_debit",
            {
                method: "POST",
                headers: {
                    Authorization:
                        `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
                },
                body: JSON.stringify({
                    authorization_code: authorization_code,
                    currency: "NGN",
                    amount: "20000",
                    email: "catimo860@gmail.com",
                }),
            }
        );
        const json = await response.json();
        setResponse(json);
    };

    return (
        <div>
            <h3>Partial Debit</h3>

            <p>
                <small>Retrieve part of a payment from a customer</small>
            </p>

            <button onClick={partialDebit}>Partial Debit</button>

            {response && <pre>{JSON.stringify(response, undefined, 2)}</pre>}
        </div>
    );
}

export default PartialDebit;
