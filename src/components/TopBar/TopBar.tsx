import React from "react";
import { useSelector } from "react-redux";

import styles from "./TopBar.module.css";
import { selectActiveUser } from "../../store/listingsSlice";

const TopBar: React.FC = () => {
  const activeUser: string | null = useSelector(selectActiveUser);

  return (
    <div className={styles.navBar} data-testid="TopBar">
      {activeUser && (
        <>
          Active user:
          <span className={styles.ativeUser}>{activeUser}</span>

        </>
      )}
    </div>
  );
};

export default TopBar;
