import React from "react";
import { useState } from "react";

function CreateSubscription() {
    const [data, setData] = useState(null);

    const [customer, set_customer] = useState("");
    const [plan, set_plan] = useState("");
    const [authorization, set_authorization] = useState("");

    const createSubscription = async () => {
        const response = await fetch("https://api.paystack.co/subscription", {
            method: "POST",
            headers: {
                Authorization:
                    `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
            },
            body: JSON.stringify({
                customer,
                plan,
                ...(authorization && { authorization }),
            }),
        });
        const json = await response.json();
        setData(json);
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>Create Subscription</h2>
                <p>Create a subscription on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Customer </label>
                    <input
                        value={customer}
                        onChange={(e) => set_customer(e.target.value)}
                    />
                </div>
                <div>
                    <label>Plan </label>
                    <input
                        value={plan}
                        onChange={(e) => set_plan(e.target.value)}
                    />
                </div>
                <div>
                    <label>Authorization </label>
                    <input
                        value={authorization}
                        onChange={(e) => set_authorization(e.target.value)}
                    />
                </div>
                <button onClick={createSubscription}>
                    Create Subscription
                </button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default CreateSubscription;
