import React, { useState } from "react";

function RemoveSubaccountFromSplit() {
    const [data, setData] = useState(null);

    const [id, set_id] = useState("");

    const [subaccount, set_subaccount] = useState("");

    const removeSubaccountFromSplit = async () => {
        try {
            const response = await fetch(
                "https://api.paystack.co/split/" + id + "/subaccount/remove",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_PAYSTACK_SECRET
                        }`,
                    },
                    body: JSON.stringify({
                        subaccount,
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
                <h2>Remove Subaccount from Split</h2>
                <p>Remove a subaccount from a transaction split</p>

                <h3>Required Fields</h3>

                <div>
                    <label>ID </label>
                    <input
                        value={id}
                        onChange={(e) => set_id(e.target.value)}
                    />
                </div>
                <div>
                    <label>Subaccount</label>
                    <input
                        value={subaccount}
                        onChange={(e) => set_subaccount(e.target.value)}
                    />
                </div>
                <button onClick={removeSubaccountFromSplit}>
                    Remove Subaccount from Split
                </button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default RemoveSubaccountFromSplit;
