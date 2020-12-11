import React from "react";

import { Container, Card } from "semantic-ui-react";

function FindComp() {
  return (
    <Container
      style={{
        // marginLeft: "16px",
        marginTop: "10px",
      }}
    >
      <Card>
        <Card.Content>
          <Card.Header>
            Retrive Components/Find available Components
          </Card.Header>
          <Card.Meta>
            <span className="date">(Privately/Publicly)</span>
          </Card.Meta>
          <Card.Description>
            <p>
              User can find public components posted by other users and private
              components posted by the user. An integrated search tool is
              provided with facet and attribute search for retrieving most
              relevant components.
            </p>
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
}

export default FindComp;
