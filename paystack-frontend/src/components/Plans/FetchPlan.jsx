import React from "react";
import { useState } from "react";

function FetchPlan() {
    const [data, setData] = useState(null);

    const [id_or_code, set_id_or_code] = useState("");

    const fetchPlan = async () => {
        const response = await fetch(
            "https://api.paystack.co/plan/" + id_or_code,
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
                <h2>Fetch Plan</h2>
                <p>Get details of a plan on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>ID or Code</label>
                    <input
                        value={id_or_code}
                        onChange={(e) => set_id_or_code(e.target.value)}
                    />
                </div>
                <button onClick={fetchPlan}>Fetch Plan</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default FetchPlan;
