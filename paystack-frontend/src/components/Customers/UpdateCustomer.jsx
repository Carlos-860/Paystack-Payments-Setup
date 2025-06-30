import React from "react";
import { useState } from "react";

function UpdateCustomer() {
    const [data, setData] = useState(null);

    const [code, set_code] = useState("");
    const [first_name, set_first_name] = useState("");
    const [last_name, set_last_name] = useState("");
    const [phone, set_phone] = useState("");

    const UpdateCustomer = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                "https://api.paystack.co/customer/" + code,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_PAYSTACK_SECRET
                        }`,
                    },
                    body: JSON.stringify({
                        ...(first_name && { first_name }),
                        ...(last_name && { last_name }),
                        ...(phone && { phone }),
                    }),
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
            <form onSubmit={UpdateCustomer}>
                <h2>Update Customer</h2>
                <p>Update a customer's details on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Code </label>
                    <input
                        required
                        value={code}
                        onChange={(e) => set_code(e.target.value)}
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
                <button type="submit">Update Customer</button>
            </form>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default UpdateCustomer;
