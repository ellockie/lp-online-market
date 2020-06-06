import React from "react";
import { Route } from "react-router-dom";

import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Dashboard from "../components/Dashboard/Dashboard";

export default [
    <Route key="Login" path="/login" component={Login} />,
    <Route key="Signup" path="/signup" component={Signup} />,
    <Route key="Dashboard" path="/dashboard" component={Dashboard} />
];