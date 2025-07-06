import React from "react";
import { useState } from "react";

function ListTransactions() {
    const [data, setData] = useState(null);

    const listTransactions = async () => {
        try {
            const response = await fetch(
                "https://api.paystack.co/transaction",
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
                <h2>List Transactions</h2>
                <p>List transactions carried out on your integration</p>

                <button onClick={listTransactions}>List Transactions</button>
            </React.Fragment>

            {data && (
                <React.Fragment>
                    <h3>Table Output</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Amount</th>
                                <th>Fees</th>
                                <th>Customer</th>
                                <th>Reference</th>
                                <th>Channel</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Gateway Response</th>
                                <th>Created at</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((transaction) => (
                                <tr>
                                    <td>{transaction.id}</td>
                                    <td>
                                        {transaction.currency}{" "}
                                        {transaction.amount}
                                    </td>
                                    <td>
                                        {transaction.currency}{" "}
                                        {transaction.fees}
                                    </td>
                                    <td>
                                        {transaction.customer.first_name}{" "}
                                        {transaction.customer.last_name}
                                    </td>
                                    <td>{transaction.reference}</td>
                                    <td>{transaction.channel}</td>
                                    <td>{transaction.created_at}</td>
                                    <td>{transaction.status}</td>
                                    <td>{transaction.gateway_response}</td>
                                    <td>{transaction.createdAt}</td>
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

export default ListTransactions;
