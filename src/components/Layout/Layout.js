import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import Auxx from "../hoc/Auxx";
import Home from "../Home/Home";
import NavbarComponent from "./NavbarComponent";
import Insert from "../Insert/Insert";
import FindComponents from "../FindComponents/FindComponents";
import Login from "../login/login";
import ComponentDetail from "../componentDetail";
import { connect } from "react-redux";
import Logout from "../login/logout";
import Footer from "../Footer";
import Signup from "../Signup/Signup";
// import * as actionTypes from "../store/actions";

class Layout extends React.Component {
  render() {
    // var userLoggedIn = <Route path="/logout" component={Login} />;
    // var userLoggedOut = <Route path="/login" component={Logout} />;
    return (
      <Auxx>
        <NavbarComponent />
        <Footer />
        <Switch>
          <Route path="/insert" component={Insert} />
          <Route path="/home" component={Home} />
          <Route path="/findComponents" component={FindComponents} />
          {/* {this.props.jwt != null ? userLoggedIn : userLoggedOut} */}
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/componentDetail/:id"
            component={() => <ComponentDetail />}
          />
        </Switch>
      </Auxx>
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

export default connect(mapStateToProps)(Layout);
