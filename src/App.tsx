import React from "react";
import logo from "./logo.svg";
import Counter from "./features/counter/Counter";
import {
  createMuiTheme,
  withStyles,
  createStyles,
  Theme,
  WithStyles,
  StyleRules,
} from "@material-ui/core/styles";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";

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



const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff",
    },
  },
});

const styles: (theme: Theme) => StyleRules<string> = (theme) =>
  createStyles({
    root: {},
    app: {
      textAlign: "center",
    },
    appLogo: {
      height: "40vmin",
      pointerEvents: "none",
      "@media (prefers-reduced-motion: no-preference) ": {
        animation: "App-logo-float infinite 3s ease-in-out",
      },
    },
    appHeader: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
    },
    appLink: {
      color: "rgb(112, 76, 182)",
    },
  });

type AppProps = {} & WithStyles<typeof styles>;

const App = ({ classes }: AppProps) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>

      ({routes})
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home classes={classes} />
          </Route>
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>
);

function Home({ classes }: AppProps) {
  return (
  <>
    <h2>Home</h2>
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={classes.appLink}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={classes.appLink}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={classes.appLink}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span>, </span>
          <a
            className={classes.appLink}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          <span>, and </span>
          <a
            className={classes.appLink}
            href="https://material-ui.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material-UI
          </a>
        </span>
      </header>
    </div>
  </>
);
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
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
          <HomeButton/>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return (
    <>
      <h3>Requested topic ID: {topicId}</h3>
      <AboutButton/>
    </>
  );
}

export default withStyles(styles)(App);
