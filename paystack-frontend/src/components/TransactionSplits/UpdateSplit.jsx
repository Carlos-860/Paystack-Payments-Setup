import React, { useState } from "react";

function UpdateSplit() {
    const [data, setData] = useState(null);

    const [id, set_id] = useState("");

    const [name, set_name] = useState("");
    const [active, set_active] = useState(false);
    const [bearer_type, set_bearer_type] = useState("");
    const [bearer_subaccount, set_bearer_subaccount] = useState("");

    const updateSplit = async () => {
        try {
            const response = await fetch(
                "https://api.paystack.co/split/" + id,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_PAYSTACK_SECRET
                        }`,
                    },
                    body: JSON.stringify({
                        ...(name && { name }),
                        active,
                        ...(bearer_type && { bearer_type }),
                        ...(bearer_subaccount && { bearer_subaccount }),
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
            <React.Fragment>
                <h2>Update Split</h2>
                <p>Update a transaction split details on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>ID </label>
                    <input
                        value={id}
                        onChange={(e) => set_id(e.target.value)}
                    />
                </div>

                <h3>Optional Fields</h3>

                <div>
                    <label>Name</label>
                    <input
                        value={name}
                        onChange={(e) => set_name(e.target.value)}
                    />
                </div>
                <div>
                    <label>Active</label>
                    <input
                        value={active}
                        type="checkbox"
                        onChange={(e) => set_active(e.target.checked)}
                    />
                </div>
                <div>
                    <label>Bearer Type</label>
                    <input
                        value={bearer_type}
                        onChange={(e) => set_bearer_type(e.target.value)}
                    />
                    <select onChange={(e) => set_bearer_type(e.target.value)}>
                        <option value={"all"}>All accounts</option>
                        <option value={"all-proportional"}>All proportional</option>
                        <option value={"account"}>Your Account</option>
                        <option value={"subaccount"}>Sub Account</option>
                    </select>
                </div>
                <div>
                    <label>Bearer Subaccount</label>
                    <input
                        disabled={bearer_type !== "subaccount"}
                        value={bearer_subaccount}
                        onChange={(e) => set_bearer_subaccount(e.target.value)}
                    />
                </div>
                <button onClick={updateSplit}>Update Split</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default UpdateSplit;
