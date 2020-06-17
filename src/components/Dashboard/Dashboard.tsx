import React, { useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import { selectActiveUser, setListings, selectListing } from "../../store/listingsSlice";
import { useSelector, useDispatch } from "react-redux";

import { ListingDetails, MenuBar, ListingsDataTable } from "./components";
import { Listing } from "../../models";
import { getUserListings, exampleUserListings, saveUserListings } from "../../services";

import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  const activeUser: string | null = useSelector(selectActiveUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeUser) {
      let userListings: Listing[] = activeUser
        ? getUserListings(activeUser)
        : [];
      if (!userListings.length) {
        // Pre-populates listings, only for demo purposes
        userListings = [...exampleUserListings];
        saveUserListings(userListings, activeUser);
      }
      dispatch(setListings(userListings));
      // Preselect the first listing
      if (userListings.length) {
        dispatch(selectListing(userListings[0]));
      }

      // Cleanup on unmount
      return () => {dispatch(setListings([]));};
    }
  }, [activeUser, dispatch]);

  if (!activeUser) {
    return (
      <Container
        fluid
        className={styles.containerNoAuth}
        data-testid="dashboard"
      >
        Please &nbsp; <a href="/#/login">login</a> &nbsp; or &nbsp;{" "}
        <a href="/#/signup">sign up</a> &nbsp; first
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
