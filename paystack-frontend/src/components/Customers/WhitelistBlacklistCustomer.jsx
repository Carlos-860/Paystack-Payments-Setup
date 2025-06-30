import React from "react";
import { useState } from "react";

function WhitelistBlacklistCustomer() {
    const [data, setData] = useState(null);

    const [customer, set_customer] = useState("");
    const [risk_action, set_risk_action] = useState("default");

    const whitelistBlacklistCustomer = async () => {
        const response = await fetch(
            "https://api.paystack.co/customer/set_risk_action",
            {
                method: "POST",
                headers: {
                    Authorization:
                        `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
                },
                body: JSON.stringify({
                    customer,
                    risk_action,
                }),
            }
        );
        const json = await response.json();
        setData(json);
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>Whitelist/Blacklist Customer</h2>
                <p>Whitelist or blacklist a customer on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Customer </label>
                    <input
                        value={customer}
                        onChange={(e) => set_customer(e.target.value)}
                    />
                </div>

                <h3>Optional Fields</h3>

                <div>
                    <label>Risk Action</label>
                    <input
                        type="checkbox"
                        value={risk_action}
                        onChange={(e) =>
                            set_risk_action(e.target.checked ? "deny" : "default")
                        }
                    />
                </div>
                <button onClick={whitelistBlacklistCustomer}>
                    Whitelist/Blacklist Customer
                </button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default WhitelistBlacklistCustomer;
