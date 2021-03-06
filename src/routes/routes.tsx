import React from "react";
import { Route } from "react-router-dom";

import { Login } from "../components";
import { Signup } from "../components";
import { Dashboard } from "../components";
import { ThankYou } from "../components";

export default [
    <Route key="Login" path="/login" component={Login} />,
    <Route key="Signup" path="/signup" component={Signup} />,
    <Route key="ThankYou" path="/thankyou" component={ThankYou} />,
    <Route key="Dashboard" path="/dashboard" component={Dashboard} />,

    <Route key="Home-Login" path="/" component={Login} />,
];