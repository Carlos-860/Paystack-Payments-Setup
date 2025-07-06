import React from "react";
import InitializeTransaction from "../components/Transactions/InitializeTransaction";
import VerifyTransaction from "../components/Transactions/VerifyTransaction";
import ListTransactions from "../components/Transactions/ListTransactions";
import FetchTransaction from "../components/Transactions/FetchTransaction";
import ChargeAuthorization from "../components/Transactions/ChargeAuthorization";

function Transactions() {
    return (
        <React.Fragment>
            <hr />

            <h1>Transactions</h1>
            <p>
                The Transactions API allows you create and manage payments on your integration.
            </p>

            <hr />

            <InitializeTransaction />

            <hr />

            <VerifyTransaction />

            <hr />

            <ListTransactions />

            <hr />

            <FetchTransaction />

            <hr />

            <ChargeAuthorization />
            
            <hr />

            <br />

            <br />
        </React.Fragment>
    );
}

export default Transactions;
