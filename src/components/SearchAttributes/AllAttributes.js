import React from "react";
import TechType from "./EachAttribute/TechType";
import ComponentFunction from "./EachAttribute/ComponentFunction";
import PrivateComponent from "./EachAttribute/PrivateComponent";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import ComponentOs from "./EachAttribute/ComponentOs";
import ComponentVersion from "./EachAttribute/ComponentVersion";
import Domain from "./EachAttribute/Domain";
import ComponentInput from "./EachAttribute/ComponentInput";
import ComponentOutput from "./EachAttribute/ComponentOutput";

class AllAttributes extends React.Component {
  render() {
    const checkbox = (
      <PrivateComponent
        searchComponentsHandler={this.props.searchComponentsHandler}
        privateComponentChangeHandler={this.props.privateComponentChangeHandler}
      />
    );
    return (
      <div>
        <TechType
          searchComponentsHandler={this.props.searchComponentsHandler}
          techTypeChangeHandler={this.props.techTypeChangeHandler}
        />
        <ComponentFunction
          searchComponentsHandler={this.props.searchComponentsHandler}
          componentFunctionChangeHandler={
            this.props.componentFunctionChangeHandler
          }
        />
        {this.props.jwt ? checkbox : null}
        <Domain domainChangeHandler={this.props.domainChangeHandler} />
        <ComponentVersion
          componentVersionChangeHandler={
            this.props.componentVersionChangeHandler
          }
        />
        <ComponentInput
          componentInputChangeHandler={this.props.componentInputChangeHandler}
        />
        <ComponentOutput
          componentOutputChangeHandler={this.props.componentOutputChangeHandler}
        />
        <ComponentOs
          componentOsChangeHandler={this.props.componentOsChangeHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    jwt: state.jwt,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedPerson: (name, age) =>
      dispatch({
        type: actionTypes.ADD_PERSON,
        personData: { name: name, age: age },
      }),
    onLoginSuccess: (username, jwt) =>
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
          username: username,
          jwt: jwt,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllAttributes);
