import React from "react";

import { Container, Card } from "semantic-ui-react";

function Welcome() {
  return (
    <Container
      style={{
        // marginLeft: "16px",
        marginTop: "10px",
      }}
    >
      <Card>
        <Card.Content>
          <Card.Header>Welcome To Reusable Component Repository</Card.Header>
          <Card.Meta>
            <span className="date">A Cloud Repository</span>
          </Card.Meta>
          <Card.Description>
            <p>
              This is a website were you can find components posted by users
              preview them, download them and integrate to your own project.
            </p>
            <p>
              It is a tool which provides a repository for user's peripheral
              products (functions, classes, libraries, ...) which is created
              during the software development process for later use.
            </p>
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
}

export default Welcome;
