import React from "react";
import { Table, TableBody } from "semantic-ui-react";
import { useSelector } from "react-redux";

import { selectUserListing } from "../../../../store/listingsSlice";
import { Item } from "../../../../models";
import { currencyFormatter } from "../../../../services";

import styles from "./ListingDetails.module.css";

const ListingDetails: React.FC = () => {
  const item: Item | null = useSelector(selectUserListing);

  const formattedCurrency: string = item
    ? currencyFormatter(item.currency)(item.price)
    : "";

  return (
    <div className={styles.listingDetails} data-testid="ListingDetails">
      {item && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <TableBody>
            <Table.Row data-testid="ItemRow">
              <Table.Cell>{item.itemName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{item.description}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="right">{formattedCurrency}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{item.currency}</Table.Cell>
            </Table.Row>
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default ListingDetails;
