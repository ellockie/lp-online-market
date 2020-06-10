import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";

import { Listings, ListingDetails, MenuBar } from "./components";

import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => (
  <Container fluid className={styles.container}>
    <Header
      as="h3"
      content="Your Listings"
      textAlign="center"
      className={styles.h3}
      data-testid="dashboard"
    />
    <Grid stackable>
      <Grid.Column width={16}>
        <MenuBar />
      </Grid.Column>
      <Grid.Column width={11}>
        <Listings />
      </Grid.Column>
      <Grid.Column width={5}>
          <ListingDetails />
      </Grid.Column>
    </Grid>
  </Container>
);

export default Dashboard;
