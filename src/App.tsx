import React from "react";
import Counter from "./features/counter/Counter";
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

import styles from "./App.module.less";

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

const App = () => (
  <Router>
    <Menu />
    <Switch>{routes}</Switch>
  </Router>
);

export function Home() {
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

function Menu() {
  return (
    <>
      <ul style={{ position: "absolute" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </>
  );
}

export function About() {
  return (
    <>
      <h2>About</h2>
      <Counter />
    </>
  );
}

export function Topics() {
  let match = useRouteMatch();

  return (
    <div>
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

export function Topic() {
  let { topicId } = useParams();
  return (
    <>
      <h3>Requested topic ID: {topicId}</h3>
      <AboutButton />
    </>
  );
}

export default App;
