import React, { useState } from "react";

import PaystackPop from "@paystack/inline-js";

function InitializeTransaction() {
    const [data, setData] = useState(null);

    const [email, set_email] = useState("");
    const [amount, set_amount] = useState("");
    const [plan, set_plan] = useState("");
    const [split_code, set_split_code] = useState("");

    const initializePayment = async () => {
        const response = await fetch(
            "https://api.paystack.co/transaction/initialize",
            {
                method: "POST",
                headers: {
                    Authorization:
                        `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
                },
                body: JSON.stringify({
                    email,
                    amount,
                    ...(plan && { plan }),
                    ...(split_code && { split_code })
                }),
            }
        );
        const json = await response.json();
        setData(json);
    };

    const completePayment = () => {
        const popup = new PaystackPop();
        popup.resumeTransaction(data.data.access_code);
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>Step 1: Initialize Transaction</h2>
                <p>Initialize a transaction from your backend</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Amount </label>
                    <input
                        value={amount}
                        onChange={(e) => set_amount(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email </label>
                    <input
                        value={email}
                        onChange={(e) => set_email(e.target.value)}
                    />
                </div>

                <h3>Optional Fields</h3>

                <div>
                    <label>Plan</label>
                    <input
                        value={plan}
                        onChange={(e) => set_plan(e.target.value)}
                    />
                </div>
                <div>
                    <label>Split Code</label>
                    <input
                        value={split_code}
                        onChange={(e) => set_split_code(e.target.value)}
                    />
                </div>
                <button onClick={initializePayment}>
                    Initialize Transaction
                </button>

                <h2>Step 2: Complete transaction</h2>
                <button onClick={completePayment}>Complete Transaction</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default InitializeTransaction;
