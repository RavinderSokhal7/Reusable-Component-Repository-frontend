import React from "react";

import { Container, Card } from "semantic-ui-react";

function InsertAbout() {
  return (
    <Container
      style={{
        // marginLeft: "16px",
        marginTop: "10px",
      }}
    >
      <Card>
        <Card.Content>
          <Card.Header>Insert Components</Card.Header>
          <Card.Meta>
            <span className="date">(Privately/Publicly)</span>
          </Card.Meta>
          <Card.Description>
            <p>
              Users can insert components built during there development process
              privately or publicly and retrieve them efficiently in "find
              Components" tab and search your component
            </p>
            <p>
              An integrated search tool is provided with facet and attribute
              search for retrieving most relevant components.
            </p>
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
}

export default InsertAbout;
