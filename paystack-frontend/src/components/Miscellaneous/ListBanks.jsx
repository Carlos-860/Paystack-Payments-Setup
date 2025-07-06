import React from "react";
import { useState } from "react";

function ListBanks() {
    const [data, setData] = useState(null);

    const [country, set_country] = useState("ghana");

    const listBanks = async (e) => {
        e.preventDefault();
        const response = await fetch(
            "https://api.paystack.co/bank?country=" + country,
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
            <form onSubmit={listBanks}>
                <h2>List Banks</h2>
                <p>Get a list of all supported banks and their properties</p>

                <h3>Required Fields</h3>

                <div>
                    <label>Country </label>
                    <select
                        name=""
                        id=""
                        onChange={(e) => set_country(e.target.value)}
                    >
                        <option value={"ghana"}>Ghana</option>
                        <option value={"kenya"}>Kenya</option>
                        <option value={"nigeria"}>Nigeria</option>
                        <option value={"south africa"}>South Africa</option>
                    </select>
                </div>

                <button type="submit">List Banks</button>
            </form>

            <React.Fragment>
                {data && (
                    <React.Fragment>
                        <h3>Table Output</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Bank Name</th>
                                    <th>Slug</th>
                                    <th>Code</th>
                                    <th>Longcode</th>
                                    <th>Gateway</th>
                                    <th>Pay With Bank</th>
                                    <th>Supports Transfer</th>
                                    <th>Available For Direct Debit</th>
                                    <th>Active</th>
                                    <th>Country</th>
                                    <th>Currency</th>
                                    <th>Type</th>
                                    <th>Is Deleted</th>
                                    <th>Created at</th>
                                    <th>Updated at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.data?.map((bank) => (
                                    <tr>
                                        <td>{bank.id}</td>
                                        <td>{bank.name}</td>
                                        <td>{bank.slug}</td>
                                        <td>{bank.code}</td>
                                        <td>{bank.longcode}</td>
                                        <td>{JSON.stringify(bank.gateway, undefined, 2)}</td>
                                        <td>{JSON.stringify(bank.pay_with_bank, undefined, 2)}</td>
                                        <td>{JSON.stringify(bank.supports_transfer, undefined, 2)}</td>
                                        <td>{JSON.stringify(bank.available_for_direct_debit, undefined, 2)}</td>
                                        <td>{JSON.stringify(bank.active, undefined, 2)}</td>
                                        <td>{bank.country}</td>
                                        <td>{bank.currency}</td>
                                        <td>{bank.type}</td>
                                        <td>{JSON.stringify(bank.is_deleted, undefined, 2)}</td>
                                        <td>{bank.createdAt}</td>
                                        <td>{bank.updatedAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </React.Fragment>
                )}

                {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
            </React.Fragment>
        </React.Fragment>
    );
}

export default ListBanks;
