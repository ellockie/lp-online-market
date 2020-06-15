import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";

import { Listing } from "../../../../models";
import {
  selectUserListings,
  selectListing,
  selectUserListing,
} from "../../../../store/listingsSlice";
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
    width: "388px",
  },
  {
    name: "Price",
    selector: "price",
    sortable: true,
    right: true,
    width: "90.5px",
    format: (item: Listing) => currencyFormatter(item.currency)(item.price),
  },
  {
    name: "Currency",
    selector: "currency",
    sortable: true,
    width: "90.5px",
  },
];

const ListingsDataTable: React.FC = () => {
  const items: Listing[] = useSelector(selectUserListings);
  const dispatch = useDispatch();
  const selectedListing: Listing | null = useSelector(selectUserListing);

  const onRowClicked = (item: Listing) => {
    dispatch(selectListing(item));
  };

  const conditionalRowStyles = [
    {
      when: (item: Listing) =>
        selectedListing ? item.id === selectedListing.id : false,
      style: {
        backgroundColor: "#bfeae8 !important",
        color: "black",
      },
    },
  ];

  return (
    <span data-testid="ListingsDataTable">
      <DataTable
        title="Your Listings"
        columns={columns}
        data={items}
        overflowY={false}
        striped={true}
        highlightOnHover={true}
        pointerOnHover={true}
        onRowClicked={onRowClicked}
        pagination={true}
        conditionalRowStyles={conditionalRowStyles}
      />
    </span>
  );
};

export default ListingsDataTable;
