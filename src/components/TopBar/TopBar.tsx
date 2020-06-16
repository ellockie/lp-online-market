import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "semantic-ui-react";

import { selectActiveUser, setActiveUser } from "../../store/listingsSlice";

import styles from "./TopBar.module.css";

const TopBar: React.FC = () => {
  const activeUser: string | null = useSelector(selectActiveUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const LogIn = () => {
    history.push("/login");
  };

  const LogOut = () => {
    dispatch(setActiveUser(null));
    history.push("/login");
  };

  // Don't show on "Thank you" page
  if (location.pathname === "/thankyou") {
    return null;
  }

  return (
    <div className={styles.navBar} data-testid="TopBar">
      {activeUser && (
        <>
          Hello,
          <span className={styles.ativeUser}>{activeUser}</span>
          <Button className={styles.logoutButton} onClick={LogOut} color="teal" size="mini">
            Log out
          </Button>
        </>
      )}
      {!activeUser &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && (
          <Button className={styles.logoutButton} onClick={LogIn} color="teal" size="mini">
            Log in
          </Button>
        )}
    </div>
  );
};

export default TopBar;
