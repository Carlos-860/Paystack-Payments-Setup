import React from "react";
import CreatePlan from "../components/Plans/CreatePlan";
import ListPlans from "../components/Plans/ListPlans";
import FetchPlan from "../components/Plans/FetchPlan";
import UpdatePlan from "../components/Plans/UpdatePlan";

function Plans() {
    return (
        <React.Fragment>
            <hr />

            <CreatePlan />

            <hr />

            <ListPlans />

            <hr />

            <FetchPlan />

            <hr />

            <UpdatePlan />

            <hr />

            <br />

            <br />
        </React.Fragment>
    );
}

export default Plans;
