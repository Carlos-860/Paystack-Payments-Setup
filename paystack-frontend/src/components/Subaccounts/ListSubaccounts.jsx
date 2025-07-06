import React from "react";
import { useState } from "react";

function ListSubaccounts() {
    const [data, setData] = useState(null);

    const listSubaccounts = async () => {
        const response = await fetch("https://api.paystack.co/subaccount", {
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
            <h3>List Subaccounts</h3>

            <p>
                <small>List subaccounts available on your integration</small>
            </p>

            <button onClick={listSubaccounts}>List Subaccounts</button>

            {data && (
                <React.Fragment>
                    <h3>Table Output</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Subaccount Code</th>
                                <th>Business Name</th>
                                <th>Description</th>
                                <th>Primary Contact Name</th>
                                <th>Primary Contact Email</th>
                                <th>Primary Contact Phone</th>
                                <th>Metadata</th>
                                <th>Percentage Charge</th>
                                <th>Settlement Bank</th>
                                <th>Bank ID</th>
                                <th>Account Number</th>
                                <th>Currency</th>
                                <th>Active</th>
                                <th>Is Verified</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((subaccount) => (
                                <tr key={subaccount.id}>
                                    <td>{subaccount.id}</td>
                                    <td>{subaccount.subaccount_code}</td>
                                    <td>{subaccount.business_name}</td>
                                    <td>{subaccount.description}</td>
                                    <td>
                                        {subaccount.primary_contact_name ||
                                            JSON.stringify(
                                                subaccount.primary_contact_name
                                            )}
                                    </td>
                                    <td>
                                        {subaccount.primary_contact_email ||
                                            JSON.stringify(
                                                subaccount.primary_contact_email
                                            )}
                                    </td>
                                    <td>
                                        {subaccount.primary_contact_phone ||
                                            JSON.stringify(
                                                subaccount.primary_contact_phone
                                            )}
                                    </td>
                                    <td>
                                        {JSON.stringify(subaccount.metadata)}
                                    </td>
                                    <td>{subaccount.percentage_charge}</td>
                                    <td>{subaccount.settlement_bank}</td>
                                    <td>{subaccount.bank_id}</td>
                                    <td>{subaccount.account_number}</td>
                                    <td>{subaccount.currency}</td>
                                    <td>{subaccount.active ? "Yes" : "No"}</td>
                                    <td>
                                        {subaccount.is_verified ? "Yes" : "No"}
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

export default ListSubaccounts;
