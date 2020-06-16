import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";

import { Listing } from "../../../../models";
import {
  selectUserListings,
  selectListing,
  selectUserListing,
} from "../../../../store/listingsSlice";
import { numberFormatter } from "../../../../services";
import { Popup } from "semantic-ui-react";

/*
  ==============================  DATA TABLE  ==============================
*/

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

  const columns = [
    {
      name: "Item Name",
      selector: "itemName",
      sortable: true,
      width: "147px",
      // eslint-disable-next-line react/display-name
      cell: (listing: Listing) => {
        return (
          <Popup
            content={listing.itemName}
            trigger={<div onClick={() => onRowClicked(listing)}>{listing.itemName}</div>}
            position="top center"
          />
        );
      },
    },
    {
      name: "Description",
      selector: "description",
      sortable: true,
      width: "388px",
      // eslint-disable-next-line react/display-name
      cell: (listing: Listing) => {
        return (
          <Popup
            content={listing.description}
            trigger={<div onClick={() => onRowClicked(listing)}>{listing.description}</div>}
            position="top center"
          />
        );
      },
    },
    {
      name: "Price",
      selector: "price",
      sortable: true,
      right: true,
      width: "100.5px",
      format: (item: Listing) => numberFormatter(item.price),
    },
    {
      name: "Currency",
      selector: "currency",
      sortable: true,
      width: "80.5px",
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
