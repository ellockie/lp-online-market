import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

import FrontLayout from "../FrontLayout/FrontLayout";
import { User } from "../../models";
import { saveUser, isUserAlreadyRegistered } from "../../services";

const Signup: React.FC = () => {
  const history = useHistory();
  const [alreadyRegistered, setAlreadyRegistered] = useState<boolean>(false);

  const Schema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").required("Required"),
    password: Yup.string()
      .min(4, "Must be 4 characters or more")
      .required("Required"),
    confirmPassword: Yup.string()
      .required("Required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both passwords need to be the same"
        ),
      }),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      setAlreadyRegistered(false);
      if (isUserAlreadyRegistered(values as User)) {
        setAlreadyRegistered(true);
        return;
      }
      saveUser({ email: values.email, password: values.password } as User);
      resetForm();
      history.push("/thankyou");
    },
  });

  return (
    <FrontLayout
      header="Sign up to get started"
      message="Already registered? Log in"
      alternativeUrl="/login"
    >
      <Form size="large" onSubmit={formik.handleSubmit} data-testid="Signup">
        <Form.Input
          id="email"
          name="email"
          fluid
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />
        <Form.Input
          id="password"
          name="password"
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
        <Form.Input
          id="confirmPassword"
          name="confirmPassword"
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Confirm Password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null
          }
        />
        <Button color="teal" fluid size="large" type="submit">
          Sign up
        </Button>
        {alreadyRegistered && (
          <Message>
            <Message.Header style={{ color: "red" }}>
              This user is already registered
            </Message.Header>
            <p>
              <small>
                Forgot password?
              </small>
            </p>
          </Message>
        )}
      </Form>
    </FrontLayout>
  );
};

export default Signup;
