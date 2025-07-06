import React, { useState } from "react";

function FetchSplit() {
    const [data, setData] = useState(null);

    const [id, set_id] = useState("");

    const fetchSplit = async () => {
        const response = await fetch("https://api.paystack.co/split/" + id, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`,
            },
        });
        const json = await response.json();
        setData(json);
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>Fetch Split</h2>
                <p>Get details of a split on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>ID </label>
                    <input
                        value={id}
                        onChange={(e) => set_id(e.target.value)}
                    />
                </div>
                <button onClick={fetchSplit}>Fetch Split</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default FetchSplit;
