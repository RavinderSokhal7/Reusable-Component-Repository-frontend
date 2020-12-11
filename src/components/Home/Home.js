import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import axios from "../../axios";
import UserProfile from "./UserProfile";
import emptyUser from "../../assets/images/emptyUser.jpg";
import { Row, Col } from "react-bootstrap";
import Welcome from "./Welcome";
import InsertAbout from "./InsertAbout";
import FindComp from "./FindComp";
import { Container } from "semantic-ui-react";

class Home extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    if (this.props.username && this.state.user == null) {
      const config = {
        headers: { Authorization: `Bearer ${this.props.jwt}` },
      };
      axios
        .get("/user/" + this.props.username, config)
        .then((response) => {
          this.setState({
            user: response.data,
          });
          console.log(response);
        })
        .catch((error) => {
          this.props.onLogoutUser();
          console.log(error.response);
        });
    }
  }

  componentDidUpdate(prevprops, prevstate) {
    console.log(prevstate);
    if (this.props.username && this.state.user == null) {
      const config = {
        headers: { Authorization: `Bearer ${this.props.jwt}` },
      };
      axios
        .get("/user/" + this.props.username, config)
        .then((response) => {
          this.setState({
            user: response.data,
          });
          console.log(response);
        })
        .catch((error) => {
          this.props.onLogoutUser();
          console.log(error.response);
        });
    }
  }
  render() {
    let userDetail = null;
    if (this.state.user) {
      const user = this.state.user;
      userDetail = (
        <div>
          <UserProfile
            email={user.email}
            firstName={user.firstName}
            secondName={user.lastName}
            userName={user.userName}
            imgUrl="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            description="Insert and find your private components"
          />
        </div>
      );
    } else {
      userDetail = (
        <div>
          <UserProfile
            email=""
            firstName=""
            secondName="login to manage your components"
            userName="Guest User"
            imgUrl={emptyUser}
          />
        </div>
      );
    }
    return (
      <Container>
        <Row className="show-grid">
          <Col xs={3}>{userDetail}</Col>

          <Col xs={3}>
            <Welcome />
          </Col>
          <Col xs={3}>
            <InsertAbout />
          </Col>
          <Col xs={3}>
            <FindComp />
          </Col>
        </Row>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
