import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import { useSelector } from "react-redux";

import { Item } from "../../../../models";
import { ItemRow } from "../";
import { selectUserListings } from "../../../../store/listingsSlice";

const Listings: React.FC = () => {
  const items: Item[] = useSelector(selectUserListings);

  return (
    <Table celled data-testid="Listings">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={5}>Item Name</Table.HeaderCell>
          <Table.HeaderCell width={9}>Description</Table.HeaderCell>
          <Table.HeaderCell width={1}>Price</Table.HeaderCell>
          <Table.HeaderCell width={1}>Currency</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items.map((item) => (
          <ItemRow item={item} key={item.id} />
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon disabled>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a" icon disabled>
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
