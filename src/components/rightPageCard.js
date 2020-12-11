import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import bird from "../assets/images/dart_bird.png";
import classes from "./rightPageCard.module.css";

const rightPageCard = (props) => {
  return (
    <Col xs={12} md={12}>
      <Card style={{ padding: "50px", margin: "50px" }}>
        <Row className="show-grid">
          <Col xs={3} md={3}>
            <div className={classes.polaroid}>
              <img
                src={props.imgUrl}
                alt="component"
                className={classes.image}
              />
              <div className={classes.container}>
                <p>{props.name}</p>
              </div>
            </div>
          </Col>
          <Col xs={9} md={9}>
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                id : {props.id}
                <br />
                {props.description}
              </Card.Subtitle>
              <Card.Text>
                Language/Technology : {props.techType}
                <br />
                Component Function : {props.componentFunction}
              </Card.Text>
              {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default rightPageCard;
