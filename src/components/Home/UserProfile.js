import React from "react";
import { Container, Card, Image } from "semantic-ui-react";

const UserProfile = (props) => {
  const name = props.firstName + " " + props.secondName;
  const email = props.email;
  return (
    <Container
      style={{
        marginLeft: "16px",
        marginTop: "10px",
      }}
    >
      <Card>
        <p style={{ margin: "20px" }}>Welcome {props.userName},</p>
        <Image
          src={props.imgUrl}
          //   ui={false}
          size="small"
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{email}</span>
          </Card.Meta>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        {/* <Card.Content extra>
          <p>
            <Icon name="user" />
            22 Friends
          </p>
        </Card.Content> */}
      </Card>
    </Container>
  );
};

export default UserProfile;
