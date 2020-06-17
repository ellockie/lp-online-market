import React, { useState, useEffect } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { FrontLayout } from "../";
import { setActiveUser, selectActiveUser } from "../../store/listingsSlice";
import { User } from "../../models";
import { areCredentialsValid, setActiveUserCookie } from "../../services";

import styles from "./Login.module.css";

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const activeUser: string | null = useSelector(selectActiveUser);
  const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);

  useEffect(() => {
    if (activeUser) {
      history.push("/dashboard");
    }
  }, [activeUser]);

  const Schema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").required("Required"),
    password: Yup.string()
      .min(4, "Must be 4 characters or more")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      setWrongCredentials(false);
      if (!areCredentialsValid(values as User)) {
        setWrongCredentials(true);
        return;
      }
      dispatch(setActiveUser(values.email));
      resetForm();
      setActiveUserCookie(values.email);
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
            <Message.Header className={styles.messageHeader}>
              Wrong email or password
            </Message.Header>
            <p>
              <small>
                Please <a href="/#/signup">sign up</a> to create an account
                <br />
                <b>Note:</b> User credentials are persisted only locally
              </small>
            </p>
          </Message>
        )}
      </Form>
    </FrontLayout>
  );
};

export default Login;
