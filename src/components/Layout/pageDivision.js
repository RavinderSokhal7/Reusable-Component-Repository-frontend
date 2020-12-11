import React from "react";
import { Row, Col } from "react-bootstrap";
import SidePanel from "../SidePanel";
import RightPage from "../rightPage";

const pageDivision = (props) => {
  return (
    <Row className="show-grid">
      <Col xs={2} md={2}>
        <SidePanel
          searchComponentsHandler={props.searchComponentsHandler}
          techTypeChangeHandler={props.techTypeChangeHandler}
          componentFunctionChangeHandler={props.componentFunctionChangeHandler}
          privateComponentChangeHandler={props.privateComponentChangeHandler}
          componentOsChangeHandler={props.componentOsChangeHandler}
          componentVersionChangeHandler={props.componentVersionChangeHandler}
          domainChangeHandler={props.domainChangeHandler}
          componentInputChangeHandler={props.componentInputChangeHandler}
          componentOutputChangeHandler={props.componentOutputChangeHandler}
        />
      </Col>
      <Col xs={9} md={9}>
        <RightPage
          components={props.components}
          searchBoxChangeHandler={props.searchBoxChangeHandler}
        />
      </Col>
    </Row>
  );
};

export default pageDivision;
