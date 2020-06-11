import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

import { FrontLayout } from "../";

const Login: React.FC = () => {
  const history = useHistory();

  const Schema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      // dispatch(activateUser());
      resetForm();
      history.push("/dashboard");
    },
  });

  return (
    <FrontLayout
      header="Log-in to your account"
      message="Not registered? Sign up"
      alternativeUrl="/signup"
    >
      <Form size="large" onSubmit={formik.handleSubmit}>
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

        <Button
          color="teal"
          fluid
          size="large"
          data-testid="Login"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </FrontLayout>
  );
};

export default Login;
