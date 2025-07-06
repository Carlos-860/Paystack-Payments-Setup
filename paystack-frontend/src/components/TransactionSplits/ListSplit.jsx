import React from "react";
import { useState } from "react";

function ListSplit() {
    const [data, setData] = useState(null);

    const listSplit = async () => {
        const response = await fetch("https://api.paystack.co/split", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET}`,
            },
        });
        const json = await response.json();
        setData(json);
    };

    return (
        <div>
            <h3>List Split</h3>

            <p>
                <small>
                    List the transaction splits available on your integration
                </small>
            </p>

            <button onClick={listSplit}>List Split</button>

            {data && (
                <React.Fragment>
                    <h3>Table Output</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Currency</th>
                                <th>Intergration</th>
                                <th>Domain</th>
                                <th>Split Code</th>
                                <th>Active</th>
                                <th>Bearer Type</th>
                                <th>Bearer Subaccount</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th>Dynamic</th>
                                <th>Subaccounts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((transactionSplit) => (
                                <tr key={transactionSplit.id}>
                                    <td>{transactionSplit.id}</td>
                                    <td>{transactionSplit.name}</td>
                                    <td>{transactionSplit.type}</td>
                                    <td>{transactionSplit.currency}</td>
                                    <td>{transactionSplit.integration}</td>
                                    <td>{transactionSplit.domain}</td>
                                    <td>{transactionSplit.split_code}</td>
                                    <td>
                                        {JSON.stringify(
                                            transactionSplit.active
                                        )}
                                    </td>
                                    <td>{transactionSplit.bearer_type}</td>

                                    <td>
                                        {transactionSplit.bearer_subaccount ||
                                            JSON.stringify(
                                                transactionSplit.bearer_subaccount
                                            )}
                                    </td>
                                    <td>{transactionSplit.createdAt}</td>
                                    <td>{transactionSplit.updatedAt}</td>
                                    <td>{JSON.stringify(
                                            transactionSplit.is_dynamic
                                        )}</td>
                                    <td>
                                        <pre>
                                            {JSON.stringify(
                                                transactionSplit.subaccounts,
                                                undefined,
                                                2
                                            )}
                                        </pre>
                                    </td>
                                </tr>
                            ))}
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
        </div>
    );
}

export default ListSplit;
