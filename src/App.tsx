import React, { useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import routes from "./routes/routes";
import { TopBar } from "./components";
import { getActiveUserFromCookie } from "./services";
import { setActiveUser } from "./store/listingsSlice";

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const activeUserId: string | null = getActiveUserFromCookie();
    if (activeUserId) {
      dispatch(setActiveUser(activeUserId));
      history.push("/dashboard");
    }
  }, [dispatch, history]);

  return (
    <>
      <TopBar />
      <Switch>{routes}</Switch>
    </>
  );
};

export default App;
