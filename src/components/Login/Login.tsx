import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { FrontLayout } from "../";
import { setActiveUser, selectRegisteredUsers } from "../../store/listingsSlice";
import { User } from "../../models";

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);
  const registeredUsers: User[] = useSelector(selectRegisteredUsers);

  const Schema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").required("Required"),
    password: Yup.string()
      .min(4, "Must be 4 characters or more")
      .required("Required"),
  });

  const areCredentialsValid = (values: User) => {
      const user = registeredUsers
        .find(registeredUser => values.email === registeredUser.email);
      if(!user) {
        console.log("wrong email");
        return false;
      }
      if (values.password !== user.password) {
        console.log("wrong password");
        return false;
      }
      return true;

  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      setWrongCredentials(false);
      if (!areCredentialsValid(values)) {
        setWrongCredentials(true);
        return;
      }
      dispatch(setActiveUser(values.email));
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
        {wrongCredentials && (
          <Message>
            <Message.Header style={{ color: "red" }}>
              Wrong email or password
            </Message.Header>
            <small>
              <p>
                Please signup to create an account
                <br />
                <b>Note:</b> The changes in this application are not persisted
                yet (neither LocalStorage nor backend database)
              </p>
            </small>
          </Message>
        )}
      </Form>
    </FrontLayout>
  );
};

export default Login;
