import React from "react";
import { Route } from "react-router-dom";

import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
import { About, Topics, Home } from "../App";

export default [
    <Route key="Home" path="/home" component={Home} />,
    <Route key="Login" path="/login" component={Login} />,
    <Route key="Signup" path="/signup" component={Signup} />,
    <Route key="Dashboard" path="/dashboard" component={Dashboard} />,
    <Route key="About" path="/about" component={About} />,
    <Route key="Topics" path="/topics" component={Topics} />,
];