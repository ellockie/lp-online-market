import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { selectActiveUser } from "../../store/listingsSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ListingDetails, MenuBar, ListingsDataTable } from "./components";

import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  const activeUser: string | null = useSelector(selectActiveUser);
  if (!activeUser) {
    return (
      <Container
        fluid
        className={styles.containerNoAuth}
        data-testid="dashboard"
      >
        Please &nbsp; <a href="/#/login">login</a> &nbsp; / &nbsp; <a href="/#/signup">sign up</a> &nbsp; first
      </Container>
    );
  }
  return (
    <Container fluid className={styles.container} data-testid="dashboard">
      <Grid stackable>
        <Grid.Column width={16} className={styles.topRow}>
          <MenuBar />
          <hr className={styles.hr} />
        </Grid.Column>

        <Grid.Column width={11}>
          <ListingsDataTable />
        </Grid.Column>
        <Grid.Column width={5}>
          <ListingDetails />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Dashboard;
