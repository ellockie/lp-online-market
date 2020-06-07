import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import FrontLayout from "../FrontLayout/FrontLayout";

const Signup: React.FC = () => {
  const history = useHistory();

  const signup = () => {
    history.push("/thankyou");
  };

  return (
    <FrontLayout
      header="Sign up to get started"
      message="Already registered?"
      alternativeUrl="/#/login"
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
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Confirm Password"
        type="password"
      />

      <Button
        color="teal"
        fluid
        size="large"
        data-testid="Signup"
        onClick={signup}
      >
        Sign up
      </Button>
    </FrontLayout>
  );
};

export default Signup;
