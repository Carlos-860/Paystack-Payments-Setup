import React, { useState } from "react";

function ChargeAuthorization() {
    const [data, setData] = useState(null);

    const [email, set_email] = useState("");
    const [amount, set_amount] = useState("");
    const [authorization_code, set_authorization_code] = useState("");

    const chargeAuthorization = async () => {
        const response = await fetch(
            "https://api.paystack.co/transaction/charge_authorization",
            {
                method: "POST",
                headers: {
                    Authorization:
                        `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
                },
                body: JSON.stringify({
                    email,
                    amount,
                    authorization_code,
                }),
            }
        );
        const json = await response.json();
        setData(json);
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>Charge Authorization</h2>
                <p>
                    All authorizations marked as reusable can be charged with
                    this endpoint whenever you need to receive payments
                </p>

                <h3>Required Fields</h3>

                <div>
                    <label>Email </label>
                    <input
                        value={email}
                        onChange={(e) => set_email(e.target.value)}
                    />
                </div>
                <div>
                    <label>Amount </label>
                    <input
                        value={amount}
                        onChange={(e) => set_amount(e.target.value)}
                    />
                </div>
                <div>
                    <label>authorization_code </label>
                    <input
                        value={authorization_code}
                        onChange={(e) => set_authorization_code(e.target.value)}
                    />
                </div>
                <button onClick={chargeAuthorization}>
                    Charge Authorization
                </button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default ChargeAuthorization;
