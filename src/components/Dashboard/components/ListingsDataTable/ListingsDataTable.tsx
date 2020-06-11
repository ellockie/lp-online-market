import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";

import { Item } from "../../../../models";
import { selectUserListings, selectListing } from "../../../../store/listingsSlice";
import { currencyFormatter } from "../../../../services";

/*
  ==============================  DATA TABLE  ==============================
*/

const columns = [
  {
    name: "Item Name",
    selector: "itemName",
    sortable: true,
    width: "147px",
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
    // width: "42.5%",
    width: "388px",
  },
  {
    name: "Price",
    selector: "price",
    sortable: true,
    right: true,
    width: "90.5px",
    format: (item: Item) => currencyFormatter(item.currency)(item.price),
  },
  {
    name: "Currency",
    selector: "currency",
    sortable: true,
    width: "90.5px",
  },
];

const ListingsDataTable: React.FC = () => {
  const items: Item[] = useSelector(selectUserListings);
  const dispatch = useDispatch();

  const onRowClicked = (item: Item) => {
    console.log(item);
    dispatch(selectListing(item));
  };

  return (
    <DataTable
      title="Your Listings"
      columns={columns}
      data={items}
      overflowY={false}
      // style={{ width: "100%" }}
      striped={true}
      highlightOnHover={true}
      pointerOnHover={true}
      onRowClicked={onRowClicked}
    />
  );
};

export default ListingsDataTable;
