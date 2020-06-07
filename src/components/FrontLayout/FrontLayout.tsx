import React, { FunctionComponent } from "react";
import { Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";

import Logo from "../../images/VAKT-logo.png";
import styles from "./FrontLayout.module.css";
import { Link } from "react-router-dom";

type LayoutProps = {
  header: string;
  message: string;
  alternativeUrl: string;
};

const FrontLayout: FunctionComponent<LayoutProps> = ({
  header,
  message,
  alternativeUrl,
  children,
}) => (
  <div className={styles.Login} data-testid="FrontLayout">
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={Logo} className={styles.logo} />
          {header}
        </Header>
        <Form size="large">
          <Segment stacked>{children}</Segment>
        </Form>
        <Message>
          <Link to={alternativeUrl}>{message}</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default FrontLayout;
