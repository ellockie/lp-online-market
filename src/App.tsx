import React from "react";
import {
  HashRouter as Router,
  Switch
} from "react-router-dom";

import routes from "./routes/routes";
import { TopBar } from "./components";

const App: React.FC = (): JSX.Element => (
  <Router>
    <TopBar />
    <Switch>{routes}</Switch>
  </Router>
);

export default App;
