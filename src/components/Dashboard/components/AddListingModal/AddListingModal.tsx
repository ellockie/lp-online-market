import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Form, DropdownItemProps } from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  selectCurrencySymbols,
  addListing,
  selectActiveUser,
  selectMaxListingId,
} from "../../../../store/listingsSlice";
import { CurrencySymbol, Listing } from "../../../../models";
import defaults from "../../../../config/defaults.json";
import { saveListing } from "../../../../services";

import styles from "./AddListingModal.module.css";

const AddListingModal: React.FC = () => {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState<CurrencySymbol>(
    defaults.DEFAULT_CURRENCY as CurrencySymbol
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // get currency symbols from the store
  const currencySymbols: CurrencySymbol[] = useSelector(selectCurrencySymbols);
  const activeUser: string | null = useSelector(selectActiveUser);
  const maxCurrentId: number = useSelector(selectMaxListingId);

  const handleCreateButton = () => {
    setIsOpen(false);
  };
  const onDismiss = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    setIsOpen(false);
    formik.resetForm();
  };

  const Schema = Yup.object().shape({
    itemName: Yup.string()
      .min(4, "Must be 4 characters or more")
      .required("Required"),
    description: Yup.string()
      .min(10, "Must be 10 characters or more")
      .required("Required"),
    price: Yup.number().min(0.01, "Must be at least 0.01").required("Required"),
    currency: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      itemName: "",
      description: "",
      price: 100,
      currency: currency as CurrencySymbol,
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      const listing: Listing = Object.assign({}, values, { id: (maxCurrentId + 1) });
      dispatch(addListing(listing));
      if (activeUser) {
        saveListing(listing, activeUser);
      }
      handleCreateButton();
      resetForm();
    },
  });

  const currencyOptions: DropdownItemProps[] = currencySymbols.map(
    (symbol) => ({
      key: symbol,
      text: symbol,
      value: symbol,
    })
  );

  const closeButton = () => (
    <Button
      onClick={() => setIsOpen(true)}
      className="ui button"
      data-testid="ModalOpenButton"
      color="teal"
    >
      New Listing
    </Button>
  );

  return (
    <Modal
      as={Form}
      onSubmit={formik.handleSubmit}
      trigger={closeButton()}
      size="tiny"
      data-testid="AddListingModal"
      className={styles.AddListing}
      dimmer={"inverted"}
      onClose={onDismiss}
      open={isOpen}
    >
      <Modal.Header>Add New Listing</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form.Input
            id="itemName"
            name="itemName"
            label="Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.itemName}
            placeholder="Item name"
            width="16"
            error={
              formik.touched.itemName && formik.errors.itemName
                ? formik.errors.itemName
                : null
            }
          />
          <Form.TextArea
            id="description"
            name="description"
            label="Description"
            placeholder="Product description"
            rows="3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            error={
              formik.touched.description && formik.errors.description
                ? formik.errors.description
                : null
            }
          />
          <Form.Group widths="16">
            <Form.Input
              id="price"
              name="price"
              label="Price"
              placeholder="Price"
              type="number"
              className={styles.priceInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              error={
                formik.touched.price && formik.errors.price
                  ? formik.errors.price
                  : null
              }
              width="6"
            />
            <Form.Dropdown
              id="currency"
              name="currency"
              search
              selection
              placeholder="Select currency"
              label="Currency"
              className={styles.currencyInput}
              options={currencyOptions}
              value={currency}
              onChange={(ev, val) => {
                if (val && val.value) {
                  formik.values.currency = val.value.toString() as CurrencySymbol;
                  setCurrency(val.value.toString() as CurrencySymbol);
                }
              }}
              error={
                formik.touched.currency && formik.errors.currency
                  ? formik.errors.currency
                  : null
              }
              width="6"
            />
          </Form.Group>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onDismiss}>Dismiss</Button>
        <Button type="submit" color="teal">
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddListingModal;
