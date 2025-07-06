import React from "react";
import { useState } from "react";

function UpdatePlan() {
    const [data, setData] = useState(null);

    const [id_or_code, set_id_or_code] = useState("");
    const [name, set_name] = useState("");
    const [amount, set_amount] = useState("");
    const [interval, set_interval] = useState("daily");
    const [description, set_description] = useState("");

    const updatePlan = async () => {
        try {
            const response = await fetch(
                "https://api.paystack.co/plan/" + id_or_code,
                {
                    method: "PUT",
                    headers: {
                        Authorization:
                            `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
                    },
                    body: JSON.stringify({
                        ...(name && { name }),
                        ...(amount && { amount }),
                        ...(interval && { interval }),
                        ...(description && { description }),
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
                <h2>Update Plan</h2>
                <p>Update a plan details on your integration</p>

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
                    <label>Name</label>
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
                <div>
                    <label>Description</label>
                    <input
                        value={description}
                        onChange={(e) => set_description(e.target.value)}
                    />
                </div>
                <button onClick={updatePlan}>Update Plan</button>
            </React.Fragment>

            <React.Fragment>
                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default UpdatePlan;
