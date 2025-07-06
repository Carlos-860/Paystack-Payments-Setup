import React, { useState } from "react";

function FetchSubaccount() {
    const [data, setData] = useState(null);

    const [id_or_code, set_id_or_code] = useState("");

    const fetchSubaccount = async () => {
        const response = await fetch(
            "https://api.paystack.co/subaccount/" + id_or_code,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${
                        import.meta.env.VITE_PAYSTACK_SECRET
                    }`,
                },
            }
        );
        const json = await response.json();
        setData(json);
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>Fetch Subaccount</h2>
                <p>Get details of a subaccount on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>ID or Code</label>
                    <input
                        value={id_or_code}
                        onChange={(e) => set_id_or_code(e.target.value)}
                    />
                </div>
                <button onClick={fetchSubaccount}>Fetch Subaccount</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default FetchSubaccount;
