import React from "react";
import { Table } from "semantic-ui-react";

import { currencyFormatter } from "../../../../services";
import { Item } from "../../../../models";

import styles from "./ItemRow.module.css";

interface ItemRowProps {
  item: Item;
}

const ItemRow: React.FC<ItemRowProps> = ({ item }) => {
  const formattedCurrency: string = currencyFormatter(item.currency.symbol)(
    item.price
  );
  return (
    <Table.Row data-testid="ItemRow" className={styles.ItemRow}>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.description}</Table.Cell>
      <Table.Cell textAlign="right">{formattedCurrency}</Table.Cell>
      <Table.Cell>{item.currency.symbol}</Table.Cell>
    </Table.Row>
  );
};
export default ItemRow;
