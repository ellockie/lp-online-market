import React from "react";
import { Table, TableBody, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";

import { selectUserListing } from "../../../../store/listingsSlice";
import { Listing } from "../../../../models";
import { currencyFormatter } from "../../../../services";

import styles from "./ListingDetails.module.css";

const ListingDetails: React.FC = () => {
  const item: Listing | null = useSelector(selectUserListing);

  const formattedCurrency: string = item
    ? currencyFormatter(item.currency)(item.price)
    : "";

  return (
    <div className={styles.listingDetails} data-testid="ListingDetails">
      {item && (
        <Table className={styles.table}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Listing Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <TableBody>
            <Table.Row data-testid="ItemRow">
              <Table.Cell>
                <Label className={styles.label}>
                  Item Name
                </Label>
                {item.itemName}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label className={styles.label}>Description</Label>
                {item.description}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label className={styles.label}>Price</Label>
                {formattedCurrency}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label className={styles.label}>Currency</Label>
                {item.currency}
              </Table.Cell>
            </Table.Row>
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default ListingDetails;
