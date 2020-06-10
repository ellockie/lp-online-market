import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Form, DropdownItemProps } from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  selectCurrencySymbols,
  addListing,
} from "../../../../store/listingsSlice";
import { CurrencySymbol } from "../../../../models";
import defaults from "../../../../config/defaults.json";

import styles from "./AddListingModal.module.css";

const AddListingModal: React.FC = () => {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState<CurrencySymbol>(
    defaults.DEFAULT_CURRENCY as CurrencySymbol
  );

  const formik = useFormik({
    initialValues: {
      itemName: "",
      description: "",
      price: 100,
      currency: currency as CurrencySymbol,
    },
    validationSchema: Yup.object({
      itemName: Yup.string()
        .min(4, "Must be 4 characters or more")
        .required("Required"),
      description: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Required"),
      price: Yup.number()
        .min(0.01, "Must be at least 0.01")
        .required("Required"),
      currency: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(addListing(Object.assign({}, values, { id: 0 })));
    },
  });

  // get currency symbols from the store
  const currencySymbols: CurrencySymbol[] = useSelector(selectCurrencySymbols);
  const currencyOptions: DropdownItemProps[] = currencySymbols.map(
    (symbol) => ({
      key: symbol,
      text: symbol,
      value: symbol,
    })
  );

  return (
    <Modal
      as={Form}
      onSubmit={formik.handleSubmit}
      trigger={<Button className="ui primary button" data-testid="ModalOpenButton">New Listing</Button>}
      size="tiny"
      data-testid="AddListingModal"
      className={styles.AddListing}
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
            placeholder="Item itemName"
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
            placeholder="Product description..."
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
        &nbsp;
        <Button primary type="submit">
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddListingModal;
