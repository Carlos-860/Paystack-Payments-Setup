import React from "react";
import { useState } from "react";

function CreateCustomer() {
    const [data, setData] = useState(null);

    const [email, set_email] = useState("");
    const [first_name, set_first_name] = useState("");
    const [last_name, set_last_name] = useState("");
    const [phone, set_phone] = useState("");

    const createCustomer = async (e) => {
        e.preventDefault();
        const response = await fetch("https://api.paystack.co/customer", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`,
            },
            body: JSON.stringify({
                email,
                ...(first_name && { first_name }),
                ...(last_name && { last_name }),
                ...(phone && { phone }),
            }),
        });
        const json = await response.json();
        setData(json);
    };

    return (
        <React.Fragment>
            <form onSubmit={createCustomer}>
                <h2>Create customer</h2>
                <p>Create a customer on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Email </label>
                    <input
                        value={email}
                        onChange={(e) => set_email(e.target.value)}
                    />
                </div>

                <h3>Optional Fields</h3>

                <div>
                    <label>First Name</label>
                    <input
                        value={first_name}
                        onChange={(e) => set_first_name(e.target.value)}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        value={last_name}
                        onChange={(e) => set_last_name(e.target.value)}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        value={phone}
                        onChange={(e) => set_phone(e.target.value)}
                    />
                </div>
                <button type="submit">Create Customer</button>
            </form>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default CreateCustomer;
