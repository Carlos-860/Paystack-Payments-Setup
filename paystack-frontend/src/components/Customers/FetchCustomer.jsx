import React from "react";
import { useState } from "react";

function FetchCustomer() {
    const [data, setData] = useState(null);

    const [email_or_code, set_email_or_code] = useState("");

    const fetchCustomer = async () => {
        const response = await fetch(
            "https://api.paystack.co/customer/" + email_or_code,
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
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>Fetch Customer</h2>
                <p>Get details of a customer on your integration.</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Email or Code</label>
                    <input
                        value={email_or_code}
                        onChange={(e) => set_email_or_code(e.target.value)}
                    />
                </div>
                <button onClick={fetchCustomer}>Fetch Customer</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default FetchCustomer;
