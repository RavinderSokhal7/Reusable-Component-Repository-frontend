import React, { Component } from "react";
// import classes from "./login.module.css";
// import loginImg from "../../assets/images/dart_bird.png";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
// import { useHistory } from "react-router-dom";

class logout extends Component {
  componentDidMount() {
    this.props.onLogoutUser();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <p>Logging you out ...</p>
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
    onLogoutUser: () =>
      dispatch({
        type: actionTypes.LOGOUT,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(logout);
