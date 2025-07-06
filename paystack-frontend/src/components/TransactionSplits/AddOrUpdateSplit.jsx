import React, { useState } from "react";

function AddOrUpdateSplit() {
    const [data, setData] = useState(null);

    const [id, set_id] = useState("");

    const [subaccount, set_subaccount] = useState("");
    const [share, set_share] = useState("");

    const addOrUpdateSplit = async () => {
        try {
            const response = await fetch(
                "https://api.paystack.co/split/" + id + "/subaccount/add",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_PAYSTACK_SECRET
                        }`,
                    },
                    body: JSON.stringify({
                        subaccount,
                        share,
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
                <h2>Add/Update Subaccount Split</h2>
                <p>
                    Add a Subaccount to a Transaction Split, or update the share
                    of an existing Subaccount in a Transaction Split
                </p>

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
                <div>
                    <label>Share</label>
                    <input
                        value={share}
                        type="number"
                        onChange={(e) => set_share(e.target.value)}
                    />
                </div>
                <button onClick={addOrUpdateSplit}>
                    Add/Update Subaccount Split
                </button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default AddOrUpdateSplit;
