import React from "react";
import { useState } from "react";

function CreatePlan() {
    const [data, setData] = useState(null);

    const [name, set_name] = useState("");
    const [amount, set_amount] = useState("");
    const [interval, set_interval] = useState("daily");
    const [description, set_description] = useState("");

    const createPlan = async () => {
        const response = await fetch("https://api.paystack.co/plan", {
            method: "POST",
            headers: {
                Authorization:
                    `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
            },
            body: JSON.stringify({
                name,
                amount,
                interval,
                ...(description && { description }),
            }),
        });
        const json = await response.json();
        setData(json);
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>Create Plan</h2>
                <p>Create a plan on your integration</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Name </label>
                    <input
                        value={name}
                        onChange={(e) => set_name(e.target.value)}
                    />
                </div>
                <div>
                    <label>Amount </label>
                    <input
                        value={amount}
                        onChange={(e) => set_amount(e.target.value)}
                    />
                </div>
                <div>
                    <label>Interval </label>
                    <select
                        name=""
                        id=""
                        onChange={(e) => set_interval(e.target.value)}
                    >
                        <option value={"daily"}>Daily</option>
                        <option value={"weekly"}>Weekly</option>
                        <option value={"monthly"}>Monthly</option>
                        <option value={"quarterly"}>Quarterly</option>
                        <option value={"biannually"}>
                            Biannually (every 6 months)
                        </option>
                        <option value={"annually"}>Annually</option>
                    </select>
                </div>

                <h3>Optional Fields</h3>

                <div>
                    <label>Description</label>
                    <input
                        value={description}
                        onChange={(e) => set_description(e.target.value)}
                    />
                </div>
                <button onClick={createPlan}>Create Plan</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default CreatePlan;
