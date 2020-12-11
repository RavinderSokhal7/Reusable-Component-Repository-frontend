import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import * as ReactBootstrap from "react-bootstrap";

class NavbarComponent extends React.Component {
  render() {
    var userLoggedIn = (
      <NavLink to="/logout" exact>
        Logout
      </NavLink>
    );
    var userLoggedOut = (
      <NavLink to="/login" exact>
        Login
      </NavLink>
    );
    return (
      <ReactBootstrap.Navbar
        bg="light"
        expand="lg"
        // style={{ position: "fixed" }}
        variant="pills"
      >
        <ReactBootstrap.Navbar.Brand href="/home">
          Reusable Component Repository
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto m-1">
            {/* <ReactBootstrap.Nav.Link to="/home">Home</ReactBootstrap.Nav.Link> */}
            <NavLink to="/home" exact className="m-1 p-1 text-blue">
              Home
            </NavLink>
            <NavLink to="/findComponents" exact className="m-1 p-1 text-blue">
              Find Components
            </NavLink>
            {/* <ReactBootstrap.Nav.Link href="#link">
            Find Components
          </ReactBootstrap.Nav.Link> */}
            {this.props.jwt ? (
              <NavLink to="/insert" exact className="m-1 p-1 text-blue">
                Insert
              </NavLink>
            ) : null}
            {/* <ReactBootstrap.Nav.Link to="/insert">Insert</ReactBootstrap.Nav.Link> */}
          </ReactBootstrap.Nav>
          {/* <ReactBootstrap.Nav.Link href="/login">Login</ReactBootstrap.Nav.Link> */}
          {this.props.jwt ? userLoggedIn : userLoggedOut}
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    username: state.username,
    jwt: state.jwt,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onLoginSuccess: (username, jwt) =>
//       dispatch({
//         type: actionTypes.LOGIN_SUCCESS,
//         payload: {
//           username: username,
//           jwt: jwt,
//         },
//       }),
//   };
// };

export default connect(mapStateToProps)(NavbarComponent);
