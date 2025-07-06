import React from "react";
import { useState } from "react";

function CreateSplit() {
    const [data, setData] = useState(null);

    const [name, set_name] = useState("");
    const [type, set_type] = useState("percentage");
    const [currency, set_currency] = useState("");
    const [subaccounts, set_subaccounts] = useState([
        { subaccount: "", share: "" },
    ]);

    // Handle changes to either field in a subaccount entry
    const handleChange = (index, field, value) => {
        const updated = [...subaccounts];
        updated[index][field] = field === "share" ? Number(value) : value;
        set_subaccounts(updated);
    };

    // Add a new blank subaccount entry
    const addSubaccount = () => {
        set_subaccounts([...subaccounts, { subaccount: "", share: "" }]);
    };

    // Remove an entry by index
    const removeSubaccount = (index) => {
        set_subaccounts(subaccounts.filter((_, i) => i !== index));
    };

    const createSplit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://api.paystack.co/split", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`,
            },
            body: JSON.stringify({
                name,
                type,
                currency,
                subaccounts,
            }),
        });
        const json = await response.json();
        setData(json);
    };

    return (
        <React.Fragment>
            <form onSubmit={createSplit}>
                <h2>Create Split</h2>
                <p>Create a split payment on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Name </label>
                    <input
                        value={name}
                        onChange={(e) => set_name(e.target.value)}
                    />
                </div>
                <div>
                    <label>Type</label>
                    <select
                        value={type}
                        onChange={(e) => set_type(e.target.value)}
                    >
                        <option value="percentage">Percentage</option>
                        <option value="flat">Flat</option>
                    </select>
                </div>
                <div>
                    <label>Currency</label>
                    <input
                        value={currency}
                        onChange={(e) => set_currency(e.target.value)}
                    />
                </div>
                <div>
                    <label>Subaccounts</label>
                    <button type="button" onClick={addSubaccount}>
                        Add Subaccount
                    </button>

                    {subaccounts.map((entry, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: "1rem",
                                border: "1px solid #ccc",
                                padding: "10px",
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Subaccount ID"
                                value={entry.subaccount}
                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "subaccount",
                                        e.target.value
                                    )
                                }
                                style={{ marginRight: "10px" }}
                            />
                            <input
                                type="number"
                                placeholder="Share (%)"
                                value={entry.share}
                                onChange={(e) =>
                                    handleChange(index, "share", e.target.value)
                                }
                                style={{ marginRight: "10px" }}
                            />
                            <button
                                type="button"
                                onClick={() => removeSubaccount(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                <button type="submit">Create Split</button>
            </form>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default CreateSplit;
