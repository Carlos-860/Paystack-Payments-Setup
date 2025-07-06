import React from "react";
import { useState } from "react";

function ListPlans() {
    const [data, setData] = useState(null);

    const listPlans = async () => {
        const response = await fetch("https://api.paystack.co/plan", {
            method: "GET",
            headers: {
                Authorization:
                    `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`
            },
        });
        const json = await response.json();
        setData(json);
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <h2>List Plans</h2>
                <p>List plans available on your integration</p>

                <button onClick={listPlans}>List Plans</button>
            </React.Fragment>

            {data && (
                <React.Fragment>
                    <h3>Table Output</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Interval</th>
                                <th>Description</th>
                                <th>Plan code</th>
                                <th>No. of subscriptions</th>
                                <th>Total revenue</th>
                                <th>Send invoices</th>
                                <th>Send SMS</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((customer) => (
                                <tr>
                                    <td>
                                        {customer.is_deleted ? (
                                            <div
                                                style={{
                                                    display: "inline-flex",
                                                    width: "4px",
                                                    height: "4px",
                                                    borderRadius: "50%",
                                                    background: "red",
                                                }}
                                            />
                                        ) : (
                                            <div
                                                style={{
                                                    display: "inline-flex",
                                                    width: "4px",
                                                    height: "4px",
                                                    borderRadius: "50%",
                                                    background: "green",
                                                }}
                                            />
                                        )}{" "}
                                        {customer.name}
                                    </td>
                                    <td>{customer.amount}</td>
                                    <td>{customer.interval}</td>
                                    <td>{customer.description}</td>
                                    <td>{customer.plan_code}</td>
                                    <td>{customer.total_subscriptions}</td>
                                    <td>
                                        {customer.total_subscriptions_revenue}
                                    </td>
                                    <td>{customer.send_invoices.toString()}</td>
                                    <td>{customer.send_sms.toString()}</td>
                                    <td>{customer.createdAt}</td>
                                    <td>{customer.updatedAt}</td>
                                </tr>
                            ))}
                            <tr></tr>
                        </tbody>
                    </table>

                    <details>
                        <summary>
                            <h3 style={{ display: "inline" }}>JSON Output</h3>
                        </summary>
                        <p>
                            <pre>{JSON.stringify(data, undefined, 2)}</pre>
                        </p>
                    </details>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

export default ListPlans;
