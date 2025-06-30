import React, { useState } from "react";

function DeactivateAuthorization() {
    const [data, setData] = useState(null);

    const [authorization_code, set_authorization_code] = useState("");

    const deactivateAuthorization = async () => {
        try {
            const response = await fetch(
                "https://api.paystack.co/customer/authorization/deactivate",
                {
                    method: "POST",
                    headers: {
                        Authorization:
                            `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
                    },
                    body: JSON.stringify({
                        authorization_code,
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
                <h2>Deactivate Authorization</h2>
                <p>
                    Deactivate an authorization when the card needs to be
                    forgotten
                </p>

                <h3>Required Fields</h3>

                <div>
                    <label>Authorization code</label>
                    <input
                        value={authorization_code}
                        onChange={(e) => set_authorization_code(e.target.value)}
                    />
                </div>
                <button onClick={deactivateAuthorization}>
                    Deactivate Authorization
                </button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default DeactivateAuthorization;
