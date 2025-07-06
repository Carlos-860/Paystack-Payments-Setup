import React from "react";
import { useState } from "react";

function CreateSubaccount() {
    const [data, setData] = useState(null);

    const [business_name, set_business_name] = useState("");
    const [settlement_bank, set_settlement_bank] = useState("");
    const [account_number, set_account_number] = useState("");
    const [percentage_charge, set_percentage_charge] = useState("");

    const createSubaccount = async (e) => {
        e.preventDefault();
        const response = await fetch("https://api.paystack.co/subaccount", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`,
            },
            body: JSON.stringify({
                business_name,
                settlement_bank,
                account_number,
                percentage_charge,
            }),
        });
        const json = await response.json();
        setData(json);
    };

    return (
        <React.Fragment>
            <form onSubmit={createSubaccount}>
                <h2>Create Subaccount</h2>
                <p>Create a subacount on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Business Name </label>
                    <input
                        value={business_name}
                        onChange={(e) => set_business_name(e.target.value)}
                    />
                </div>
                <div>
                    <label>Settlement Bank</label>
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
                <button type="submit">Create Subaccount</button>
            </form>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default CreateSubaccount;
