import React, { Component } from "react";
import classes from "./login.module.css";
import loginImg from "../../assets/images/dart_bird.png";
import axios from "../../axios";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class login extends Component {
  state = {
    username: "",
    password: "",
    jwt: null,
    errorNotice: null,
  };

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  login = () => {
    const username = this.state.username;
    const password = this.state.password;
    axios
      .post("/authenticate", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        this.props.onLoginSuccess(username, response.data.jwt);
        this.setState({ errorNotice: null });
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          this.setState({
            errorNotice: (
              <div>
                <p>
                  Error Occered: incorrect username or password or check your
                  internet connection
                </p>
                <p>Error Code : {error.response.status}</p>
              </div>
            ),
          });
        }
      });
    this.props.history.push("/home");
  };
  signUp = () => {
    console.log(this.props.username);
    console.log(this.props.jwt);
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.loginHeading}>
          {this.state.errorNotice}
          <b>Login</b>
        </div>

        <img src={loginImg} className={classes.image} alt="loginImg" />

        <form>
          <input
            type="text"
            name="username"
            className={classes.inputText}
            placeholder="username"
            onChange={this.handleChangeUsername}
            value={this.state.username}
          />
          <input
            name="password"
            type="password"
            className={classes.inputText}
            onChange={this.handleChangePassword}
            placeholder="password"
            value={this.state.password}
          />
        </form>

        <button onClick={this.login} className={classes.inputSubmit}>
          Login
        </button>
        {/* <div className={classes.forgotPassword}>
          <u>Forgot password</u>
        </div> */}
        <button onClick={this.signUp} className={classes.inputSubmit}>
          Signup
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(login);
