import React from "react";
import { Table } from "semantic-ui-react";

import { currencyFormatter } from "../../../../services";
import { Item } from "../../../../models";

import styles from "./ItemRow.module.css";

interface ItemRowProps {
  item: Item;
}

const ItemRow: React.FC<ItemRowProps> = (props: ItemRowProps) => {
  const item: Item = props.item;
  const formattedCurrency: string = currencyFormatter(item.currency)(
    item.price
  );
  return (
    <Table.Row data-testid="ItemRow" className={styles.ItemRow}>
      <Table.Cell width={4} className={styles.truncate}>
        {item.itemName}
      </Table.Cell>
      <Table.Cell width={10} className={styles.truncate}>
        {item.description}
      </Table.Cell>
      <Table.Cell width={1} textAlign="right">
        {formattedCurrency}
      </Table.Cell>
      <Table.Cell width={1}>{item.currency}</Table.Cell>
    </Table.Row>
  );
};

export default ItemRow;
