import React from "react";
import AllAttributes from "./SearchAttributes/AllAttributes";

const SidePanel = (props) => {
  return (
    <div style={{ position: "fixed" }}>
      <AllAttributes
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
    </div>
  );
};

export default SidePanel;
