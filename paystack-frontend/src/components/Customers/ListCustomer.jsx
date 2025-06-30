import React from "react";
import { useState } from "react";

function ListCustomer() {
    const [data, setData] = useState(null);

    console.log(import.meta.env)

    const listCustomer = async () => {
        const response = await fetch("https://api.paystack.co/customer", {
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
                <h2>List Customer</h2>
                <p>List customers available on your integration.</p>

                <button onClick={listCustomer}>List Customer</button>
            </React.Fragment>

            {data && (
                <React.Fragment>
                    <h3>Table Output</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Meta Data</th>
                                <th>Domain</th>
                                <th>Customer Code</th>
                                <th>Risk Action</th>
                                <th>ID</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data?.map((customer) => (
                                <tr>
                                    <td>{customer.first_name}</td>
                                    <td>{customer.last_name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>{JSON.stringify(customer.metadata)}</td>
                                    <td>{customer.domain}</td>
                                    <td>{customer.customer_code}</td>
                                    <td>{customer.risk_action}</td>
                                    <td>{customer.id}</td>
                                    <td>{customer.createdAt}</td>
                                    <td>{customer.updatedAt}</td>
                                </tr>
                            ))}
                            <tr></tr>
                        </tbody>
                    </table>

                    <h3>JSON Output</h3>
                    <pre>{JSON.stringify(data, undefined, 2)}</pre>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

export default ListCustomer;
