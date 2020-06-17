import React from "react";
import {
  Table,
  TableBody,
  Label,
  Button,
  Icon,
  Popup,
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectUserListing,
  selectActiveUser,
  removeListing as removeListingFromStore,
  selectListing,
} from "../../../../store/listingsSlice";
import { Listing } from "../../../../models";
import {
  currencyFormatter,
  deleteListing as deleteListingFromLocalStorage,
} from "../../../../services";

import styles from "./ListingDetails.module.css";

const ListingDetails: React.FC = () => {
  const listing: Listing | null = useSelector(selectUserListing);
  const activeUser: string | null = useSelector(selectActiveUser);
  const dispatch = useDispatch();

  const formattedCurrency: string = listing
    ? currencyFormatter(listing.currency)(listing.price)
    : "";

  const removeListing = () => {
    if (listing && activeUser) {
      dispatch(removeListingFromStore(listing.id));
      dispatch(selectListing(null));
      deleteListingFromLocalStorage(listing.id, activeUser);
    }
  };

  return (
    <div className={styles.listingDetails} data-testid="ListingDetails">
      <Table className={styles.table}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className={styles.tableHeader}>
              Listing Details
              <Button.Group floated="right">
                <Popup
                  content="Delete listing"
                  trigger={
                    <Button
                      icon
                      size="mini"
                      className={styles.deleteButton}
                      onClick={removeListing}
                      disabled={!listing}
                    >
                      <Icon name="trash alternate outline" color="red" />
                    </Button>
                  }
                  position="top center"
                />
              </Button.Group>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <TableBody>
          <Table.Row data-testid="ItemRow">
            <Table.Cell>
              <Label className={styles.label}>Item Name</Label>
              {listing ? listing.itemName : "-"}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Label className={styles.label}>Description</Label>
              {listing ? listing.description : "-"}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Label className={styles.label}>Price</Label>
              {listing ? formattedCurrency : "-"}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Label className={styles.label}>Currency</Label>
              {listing ? listing.currency : "-"}
            </Table.Cell>
          </Table.Row>
        </TableBody>
      </Table>
    </div>
  );
};

export default ListingDetails;
