import React from "react";
import CreateSubaccount from "../components/Subaccounts/CreateSubaccount";
import ListSubaccounts from "../components/Subaccounts/ListSubaccounts";
import FetchSubAccount from "../components/Subaccounts/FetchSubaccount";
import UpdateSubaccount from "../components/Subaccounts/UpdateSubaccount";

function Subaccounts() {
    return (
        <React.Fragment>
            <hr />

            <h1>Subaccounts</h1>
            <p>
                The Subaccounts API allows you create and manage subaccounts on
                your integration. Subaccounts can be used to split payment
                between two accounts (your main account and a sub account).
            </p>

            <hr />

            <CreateSubaccount />

            <hr />

            <ListSubaccounts />

            <hr />

            <FetchSubAccount />

            <hr />

            <UpdateSubaccount />

            <hr />

            <br />

            <br />
        </React.Fragment>
    );
}

export default Subaccounts;
