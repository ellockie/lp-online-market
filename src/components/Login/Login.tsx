import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import {FrontLayout} from "../";

const Login: React.FC = () => {
  const history = useHistory();

  const login = () => {
    history.push("/dashboard");
  };

  return (
    <FrontLayout
      header="Log-in to your account"
      message="Not registered? Sign up"
      alternativeUrl="/signup"
    >
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="E-mail address"
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
      />

      <Button
        color="teal"
        fluid
        size="large"
        data-testid="Login"
        onClick={login}
      >
        Login
      </Button>
    </FrontLayout>
  );
};

export default Login;
