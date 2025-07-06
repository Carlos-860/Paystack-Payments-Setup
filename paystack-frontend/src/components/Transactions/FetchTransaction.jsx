import React, { useState } from "react";

function FetchTransaction() {
    const [data, setData] = useState(null);

    const [id, set_id] = useState("");

    const fetchTransaction = async () => {
        try {
            const response = await fetch(
                "https://api.paystack.co/transaction/" + id,
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
        } catch (err) {
            setData(err);
        }
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>Fetch Transaction</h2>
                <p>
                    Get details of a transaction carried out on your integration
                </p>

                <h3>Required Fields</h3>

                <div>
                    <label>ID </label>
                    <input
                        value={id}
                        onChange={(e) => set_id(e.target.value)}
                    />
                </div>

                <button onClick={fetchTransaction}>Fetch Transaction</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default FetchTransaction;
