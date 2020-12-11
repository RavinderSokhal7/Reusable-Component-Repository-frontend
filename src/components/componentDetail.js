import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./ComponentDetail.css";
import axios from "../axios";
import { withRouter } from "react-router-dom";
import Loading from "./Loading/Loading";
import Auxx from "../components/hoc/Auxx";

class ComponentDetail extends Component {
  state = {
    loadedPost: null,
  };
  componentDidMount() {
    console.log(this.props);
    console.log(this.state);
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
    // console.log("[DidUpdate]" + this.state);
  }

  downloadComponent = () => {
    const downloadUrl = this.state.loadedPost.downloadUri;
    const filename = this.state.loadedPost.componentName;

    fetch(downloadUrl).then((response) => {
      console.log(response);
      console.log("[fetch]");
      console.log(response.headers);
      console.log(filename);
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
      });
    });
  };

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.componentId !== this.props.match.params.id)
      ) {
        axios
          .get("/api/rcl/static/component/" + this.props.match.params.id)
          .then((response) => {
            this.setState({ loadedPost: response.data });
            console.log("[Response Recieved]");
            console.log(response);
          })
          .catch((error) => {
            this.setState({
              loadedPost: {
                componentId: "Try Again",
                name: error.response.status,
                description: "Error occured",
              },
            });
            console.log("{ERR in http axios}");
            console.log(error);
            this.props.history.push("/findcomponents");
          });
      }
    }
  }

  render() {
    var component = this.state.loadedPost;
    let post = null; //<p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = (
        <Auxx>
          <p style={{ textAlign: "center" }}>Loading...!</p>
          <Loading />
        </Auxx>
      );
    }
    if (this.state.loadedPost) {
      post = (
        <div style={{ "margin-top": "40px" }}>
          <Row>
            <Col md={5}>
              <img
                src={component.imgUrl}
                className="image"
                alt="component"
              ></img>
            </Col>
            <Col md={7}>
              <div>
                <h1 className="hStyle">{component.componentName}</h1>
                <h2 className="hhStyle">{component.description}</h2>
                <ul>
                  <li className="liStyle">
                    Version : {component.componentVersion}
                  </li>
                  <li className="liStyle">Language : {component.techType}</li>
                  <li className="liStyle">Function : {component.function}</li>
                  <li className="liStyle">Domain : {component.domain}</li>
                  <li className="liStyle">
                    Input : {component.componentInput}
                  </li>
                  <li className="liStyle">
                    Output : {component.componentOutput}
                  </li>
                  <li className="liStyle">OS : {component.componentOs}</li>
                </ul>
                <button onClick={this.downloadComponent}>
                  Download Component
                </button>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
    return post;
  }
}

export default withRouter(ComponentDetail);
