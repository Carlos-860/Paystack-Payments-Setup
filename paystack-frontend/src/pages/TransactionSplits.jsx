import React from "react";
import CreateSplit from "../components/TransactionSplits/CreateSplit";
import ListSplit from "../components/TransactionSplits/ListSplit";
import FetchSplit from "../components/TransactionSplits/FetchSplit";
import UpdateSplit from "../components/TransactionSplits/UpdateSplit";
import AddOrUpdateSplit from "../components/TransactionSplits/AddOrUpdateSplit";
import RemoveSubaccountFromSplit from "../components/TransactionSplits/RemoveSubaccountFromSplit";

function TransactionSplits() {
    return (
        <React.Fragment>
            <hr />

            <h1>Transaction Splits</h1>
            <p>
                The Transaction Splits API enables merchants split the
                settlement for a transaction across their payout account, and
                one or more subaccounts.
            </p>

            <hr />

            <CreateSplit />

            <hr />

            <ListSplit />

            <hr />

            <FetchSplit />

            <hr />

            <UpdateSplit />

            <hr />

            <AddOrUpdateSplit />

            <hr />

            <RemoveSubaccountFromSplit />

            <hr />

            <br />

            <br />
        </React.Fragment>
    );
}

export default TransactionSplits;
