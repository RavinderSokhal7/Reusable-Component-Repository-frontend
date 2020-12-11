import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import axios from "../../axios";
import AutoGrid from "./AutoGrid";

class Insert extends Component {
  state = {
    name: "",
    TechType: "",
    ComponentFunction: "",
    private: "",
    componentOs: "",
    componentVersion: "",
    domain: "",
    componentInput: "",
    componentOutput: "",
    componentImage: null,
    componentFile: null,
    previewFile: null,
    description: "",
    status: "",
    msg: "",
  };

  techTypeChangeHandler = (techType) => {
    // console.log(techType + "11");
    this.setState({ TechType: techType });
  };

  privateComponentChangeHandler = (checked) => {
    // console.log(techType + "11");
    this.setState({ private: checked });
  };

  componentFunctionChangeHandler = (_componentFunction) => {
    this.setState({
      ComponentFunction: _componentFunction,
    });
  };

  componentOsChangeHandler = (os) => {
    this.setState({ componentOs: os });
  };

  componentVersionChangeHandler = (ver) => {
    this.setState({
      componentVersion: ver,
    });
  };

  domainChangeHandler = (dom) => {
    this.setState({ domain: dom });
  };

  componentInputChangeHandler = (inp) => {
    this.setState({ componentInput: inp });
  };

  componentOutputChangeHandler = (outp) => {
    this.setState({
      componentOutput: outp,
    });
  };

  imageSelectHandler = (img) => {
    this.setState({
      componentImage: img,
    });
  };

  fileSelectHandler = (file) => {
    this.setState({
      componentFile: file,
    });
  };

  componentNameChangeHandler = (na) => {
    this.setState({ name: na });
  };

  componentDescriptionChangeHandler = (des) => {
    this.setState({ description: des });
  };

  componentUploadHandler = () => {
    console.log("here");
    let data = new FormData();
    data.append("previewImg", this.state.componentImage);
    data.append("componentFile", this.state.componentFile);
    data.append("previewFile", this.state.componentFile);
    data.append("componentName", this.state.name);
    data.append("domain", this.state.domain);
    data.append("techType", this.state.TechType);
    data.append("function", this.state.ComponentFunction);
    data.append("description", this.state.description);
    data.append("componentOs", this.state.componentOs);
    data.append("componentVersion", this.state.componentVersion);
    data.append("componentInput", this.state.componentInput);
    data.append("componentOutput", this.state.componentOutput);
    // var bearer = "Bearer " + this.props.jwt;
    const config = {
      headers: {
        Authorization: `Bearer ${this.props.jwt}`,
        "content-type": "multipart/form-data",
      },
    };
    var url = "/api/rcl/upload/component/public";
    if (this.state.private === true) {
      url = "/api/rcl/upload/component/private";
    }
    axios
      .post(url, data, config)
      .then(function (response) {
        //handle success
        console.log(response);
        alert("Component Successfully Stored in Repository!");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        alert("Component not Stored in Repository, Some Error Occured!");
      });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("[didUpdate]");
    console.log(this.state);
  }

  componentDidMount() {
    console.log("[didMount]");
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <AutoGrid
          componentNameChangeHandler={(name) =>
            this.componentNameChangeHandler(name)
          }
          componentDescriptionChangeHandler={(des) =>
            this.componentDescriptionChangeHandler(des)
          }
          techTypeChangeHandler={(tt) => this.techTypeChangeHandler(tt)}
          componentFunctionChangeHandler={(cf) =>
            this.componentFunctionChangeHandler(cf)
          }
          privateComponentChangeHandler={(cc) =>
            this.privateComponentChangeHandler(cc)
          }
          searchBoxChangeHandler={(key) => this.searchBoxChangeHandler(key)}
          componentOsChangeHandler={(os) => this.componentOsChangeHandler(os)}
          componentVersionChangeHandler={(ver) =>
            this.componentVersionChangeHandler(ver)
          }
          domainChangeHandler={(dom) => this.domainChangeHandler(dom)}
          componentInputChangeHandler={(compin) =>
            this.componentInputChangeHandler(compin)
          }
          componentOutputChangeHandler={(compout) =>
            this.componentOutputChangeHandler(compout)
          }
          imageSelectHandler={(img) => this.imageSelectHandler(img)}
          fileSelectHandler={(img) => this.fileSelectHandler(img)}
          componentUploadHandler={this.componentUploadHandler}
        />
        {/* <SimpleCard />
        <ComponentName
          componentNameChangeHandler={(name) =>
            this.componentNameChangeHandler(name)
          }
        />
        <ComponentDescription
          componentDescriptionChangeHandler={(des) =>
            this.componentDescriptionChangeHandler(des)
          }
        />
        <SidePanel
          techTypeChangeHandler={(tt) => this.techTypeChangeHandler(tt)}
          componentFunctionChangeHandler={(cf) =>
            this.componentFunctionChangeHandler(cf)
          }
          privateComponentChangeHandler={(cc) =>
            this.privateComponentChangeHandler(cc)
          }
          searchBoxChangeHandler={(key) => this.searchBoxChangeHandler(key)}
          componentOsChangeHandler={(os) => this.componentOsChangeHandler(os)}
          componentVersionChangeHandler={(ver) =>
            this.componentVersionChangeHandler(ver)
          }
          domainChangeHandler={(dom) => this.domainChangeHandler(dom)}
          componentInputChangeHandler={(compin) =>
            this.componentInputChangeHandler(compin)
          }
          componentOutputChangeHandler={(compout) =>
            this.componentOutputChangeHandler(compout)
          }
        />
        <UploadImage
          imageSelectHandler={(img) => this.imageSelectHandler(img)}
        />
        <UploadButton
          fileSelectHandler={(img) => this.fileSelectHandler(img)}
        />
        <label>
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={this.componentUploadHandler}
          >
            Submit
          </Button>
        </label> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Insert);
