import React from "react";
import { Container, Grid, Segment, Header } from "semantic-ui-react";

import { Listings, ListingDetails, MenuBar } from "./components";

import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => (
  <Container>
    {/*
    <div className={styles.dashboard} data-testid="dashboard">
    <div class="ui celled grid">
    */}
    <Header
      as="h3"
      content="Stackable Grid"
      textAlign="center"
      style={styles.h3}
      data-testid="dashboard"
    />
    <Grid stackable>
      <Grid.Column width={16}>
          <MenuBar/>
      </Grid.Column>

      <Grid.Column width={10}>
        <Segment><Listings/></Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment><ListingDetails/></Segment>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Dashboard;
