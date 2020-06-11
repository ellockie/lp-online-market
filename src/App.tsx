import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";

import routes from "./routes/routes";
import { TopBar } from "./components";

import styles from "./App.module.css";

const App: React.FC = (): JSX.Element => (
  <Router>
    <TopBar />
    <Switch>{routes}</Switch>
  </Router>
);

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

function AboutButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go to login
    </button>
  );
}

export function Home(): JSX.Element {
  return (
    <>
      <h2>Home</h2>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <div>VAKT Global Market</div>
        </header>
      </div>
    </>
  );
}


export function About(): JSX.Element {
  return (
    <>
      <h2>About</h2>
    </>
  );
}

export function Topics(): JSX.Element {
  const match = useRouteMatch();

  return (
    <div className={styles.navBar}>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
          <HomeButton />
        </Route>
      </Switch>
    </div>
  );
}

export function Topic(): JSX.Element {
  const { topicId } = useParams();
  return (
    <>
      <h3>Requested topic ID: {topicId}</h3>
      <AboutButton />
    </>
  );
}

export default App;
