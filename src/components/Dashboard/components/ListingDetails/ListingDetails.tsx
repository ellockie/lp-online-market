import React from "react";
import { Table, TableBody } from "semantic-ui-react";
import { useSelector } from "react-redux";

import styles from "./ListingDetails.module.css";
import { selectUserListing } from "../../../../store/listingsSlice";
import { Item } from "../../../../models";
import { currencyFormatter } from "../../../../services";

const ListingDetails: React.FC = () => {
  const item: Item = useSelector(selectUserListing);
  const formattedCurrency: string = currencyFormatter(item.currency)(
    item.price
  );

  return (
    <div className={styles.ListingDetails} data-testid="ListingDetails">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <TableBody>
          <Table.Row data-testid="ItemRow" className={styles.ItemRow}>
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
    </div>
  );
};

export default ListingDetails;
