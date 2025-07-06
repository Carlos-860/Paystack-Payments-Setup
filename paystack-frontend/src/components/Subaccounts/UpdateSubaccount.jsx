import React, { useState } from "react";

function UpdateSubaccount() {
    const [data, setData] = useState(null);

    const [id_or_code, set_id_or_code] = useState("");

    const [business_name, set_business_name] = useState("");
    const [settlement_bank, set_settlement_bank] = useState("");
    const [account_number, set_account_number] = useState("");
    const [percentage_charge, set_percentage_charge] = useState("");

    const updateSubaccount = async () => {
        try {
            const response = await fetch(
                "https://api.paystack.co/subaccount/" + id_or_code,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_PAYSTACK_SECRET
                        }`,
                    },
                    body: JSON.stringify({
                        ...(business_name && { business_name }),
                        ...(settlement_bank && { settlement_bank }),
                        ...(account_number && { account_number }),
                        ...(percentage_charge && { percentage_charge }),
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
                <h2>Update Subaccount</h2>
                <p>Update a subaccount details on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>ID or Code </label>
                    <input
                        value={id_or_code}
                        onChange={(e) => set_id_or_code(e.target.value)}
                    />
                </div>

                <h3>Optional Fields</h3>

                <div>
                    <label>Business Name</label>
                    <input
                        value={business_name}
                        onChange={(e) => set_business_name(e.target.value)}
                    />
                </div>
                <div>
                    <label>Settlement Bank </label>
                    <input
                        value={settlement_bank}
                        onChange={(e) => set_settlement_bank(e.target.value)}
                    />
                </div>
                 <div>
                    <label>Account Number</label>
                    <input
                        value={account_number}
                        onChange={(e) => set_account_number(e.target.value)}
                    />
                </div>
                <div>
                    <label>Percentage Charge</label>
                    <input
                        value={percentage_charge}
                        onChange={(e) => set_percentage_charge(e.target.value)}
                    />
                </div>
                <button onClick={updateSubaccount}>Update Subaccount</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default UpdateSubaccount;
