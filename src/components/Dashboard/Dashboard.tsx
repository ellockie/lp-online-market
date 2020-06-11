import React from "react";
import { Container, Grid } from "semantic-ui-react";

import {
  ListingDetails,
  MenuBar,
  ListingsDataTable,
} from "./components";

import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => (
  <Container fluid className={styles.container} data-testid="dashboard">
    <Grid stackable>
      <Grid.Column width={16} className={styles.topRow}>
        <MenuBar />
        <hr className={styles.hr}/>
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

export default Dashboard;
