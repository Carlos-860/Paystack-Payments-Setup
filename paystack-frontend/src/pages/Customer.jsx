import React from "react";
import CreateCustomer from "../components/Customers/CreateCustomer";
import ListCustomer from "../components/Customers/ListCustomer";
import FetchCustomer from "../components/Customers/FetchCustomer";
import UpdateCustomer from "../components/Customers/UpdateCustomer";
import WhitelistBlacklistCustomer from "../components/Customers/WhitelistBlacklistCustomer";
import DeactivateAuthorization from "../components/Customers/DeactivateAuthorization";

function Customer() {
    return (
        <React.Fragment>
            <hr />

            <h1>Customers</h1>
            <p>
                The Customers API allows you create and manage customers on your
                integration.
            </p>

            <hr />

            <CreateCustomer />

            <hr />

            <ListCustomer />

            <hr />

            <FetchCustomer />

            <hr />

            <UpdateCustomer />

            <hr />

            <h3>Validate Customer</h3>

            <hr />

            <WhitelistBlacklistCustomer />

            <hr />

            <DeactivateAuthorization />
        </React.Fragment>
    );
}

export default Customer;
