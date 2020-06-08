import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";

import { Item } from "../../../../models";
import { ItemRow } from "../";


const Listings: React.FC = () => {
  const items: Item[] = [
    {
      id: 1,
      name: "Idzia",
      description: "Nice product 1",
      price: 123,
      currency: { symbol: "GBP", rateEUR: 1 },
    },
    {
      id: 2,
      name: "Bdzia",
      description: "Nice product 2",
      price: 44,
      currency: { symbol: "JPY", rateEUR: 130 },
    },
    {
      id: 3,
      name: "Min",
      description: "Nice product 3",
      price: 723,
      currency: { symbol: "PLN", rateEUR: 4 },
    },
  ];

  return (
    <Table celled data-testid="Listings">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={5}>Item Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell width={1}>Price</Table.HeaderCell>
          <Table.HeaderCell width={1}>Currency</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items.map((item) => (
          <ItemRow item={item} key={item.id}/>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default Listings;
