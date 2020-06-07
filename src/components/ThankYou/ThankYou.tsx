import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Header, Segment } from "semantic-ui-react";

import styles from "./ThankYou.module.css";

const ThankYou: React.FC = () => {
  const TIMEOUT = 7000;
  const history = useHistory();

  useEffect(() => {
    const goToLoginPage = () => {
      history.push("/login");
    };
    const timerId: number = window.setInterval(() => goToLoginPage(), TIMEOUT);
    return () => {
      // Unmounting
      clearTimeout(timerId);
    };
  }, [history]);

  return (
    <div className={styles.ThankYou} data-testid="ThankYou">
      <Segment placeholder className={`ui segment ${styles.centralContainer}`}>
        <Header as="h3">Thank you for signing up!</Header>
        You'll be redirected to Login page.
        <Link to="/login" className={styles.smallHeader}>
          Go to Login page now
        </Link>
        <div className="ui bottom attached progress">
          <div className={`bar ${styles.bar}`}></div>
        </div>
      </Segment>
    </div>
  );
};

export default ThankYou;
