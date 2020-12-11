import React, { Component } from "react";
import PageDivision from "../Layout/pageDivision";
import axios from "../../axios";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class FindComponents extends Component {
  state = {
    SearchAttributes: {
      name: "",
      TechType: "",
      ComponentFunction: "",
      private: "",
      componentOs: "",
      componentVersion: "",
      domain: "",
      componentInput: "",
      componentOutput: "",
    },
    SearchedComponents: [],
    AllComponents: [],
  };

  callComponents = () => {
    // if (this.state.SearchedComponents !== []) return;
    const _components = [];
    axios
      .get("/api/rcl/download/component/public/all")
      .then((response) => {
        var comp = null;
        for (comp of response.data) {
          _components.push({
            id: comp.componentId,
            name: comp.componentName,
            techType: comp.techType,
            componentFunction: comp.function,
            imgUrl: comp.imgUrl,
            isPublic: comp.public,
            componentOs: comp.componentOs,
            version: comp.componentVersion,
            domain: comp.domain,
            input: comp.componentInput,
            output: comp.componentOutput,
            description: comp.description,
          });
        }
        this.setState({
          AllComponents: _components,
          SearchedComponents: _components,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
    // if USER LOGGED IN
    if (this.props.jwt) {
      const config = {
        headers: { Authorization: `Bearer ${this.props.jwt}` },
      };
      axios
        .get("/api/rcl/download/component/private", config)
        .then((response) => {
          console.log(response);
          // var comp = null;
          for (var comp of response.data) {
            _components.push({
              id: comp.componentId,
              name: comp.componentName,
              techType: comp.techType,
              componentFunction: comp.function,
              imgUrl: comp.imgUrl,
              isPublic: comp.public,
              componentOs: comp.componentOs,
              version: comp.componentVersion,
              domain: comp.domain,
              input: comp.componentInput,
              output: comp.componentOutput,
              description: comp.description,
            });
          }
          this.setState({
            AllComponents: _components,
            SearchedComponents: _components,
          });
        })
        .catch((error) => {
          this.props.onLogoutUser();
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        });
    }

    console.log(_components);
  };

  techTypeChangeHandler = (techType) => {
    // console.log(techType + "11");
    this.setState({
      SearchAttributes: { ...this.state.SearchAttributes, TechType: techType },
    });
  };

  privateComponentChangeHandler = (checked) => {
    // console.log(techType + "11");
    this.setState({
      SearchAttributes: { ...this.state.SearchAttributes, private: checked },
    });
  };

  componentFunctionChangeHandler = (_componentFunction) => {
    this.setState({
      SearchAttributes: {
        ...this.state.SearchAttributes,
        ComponentFunction: _componentFunction,
      },
    });
  };

  componentOsChangeHandler = (os) => {
    this.setState({
      SearchAttributes: { ...this.state.SearchAttributes, componentOs: os },
    });
  };

  componentVersionChangeHandler = (ver) => {
    this.setState({
      SearchAttributes: {
        ...this.state.SearchAttributes,
        componentVersion: ver,
      },
    });
  };

  domainChangeHandler = (dom) => {
    this.setState({
      SearchAttributes: { ...this.state.SearchAttributes, domain: dom },
    });
  };

  componentInputChangeHandler = (inp) => {
    this.setState({
      SearchAttributes: { ...this.state.SearchAttributes, componentInput: inp },
    });
  };

  componentOutputChangeHandler = (outp) => {
    this.setState({
      SearchAttributes: {
        ...this.state.SearchAttributes,
        componentOutput: outp,
      },
    });
  };

  searchBoxChangeHandler = (keyword) => {
    this.setState({
      SearchAttributes: {
        ...this.state.SearchAttributes,
        name: keyword,
      },
    });
  };

  searchComponentsHandler = () => {
    var _searchedComponents = [];
    const SearchAttributes = this.state.SearchAttributes;
    for (let component of this.state.AllComponents) {
      if (
        SearchAttributes.TechType === "" ||
        SearchAttributes.ComponentFunction === ""
      ) {
        if (
          ((component.techType.toLowerCase() ===
            SearchAttributes.TechType.toLowerCase().trim() ||
            SearchAttributes.TechType === "") &&
            component.componentFunction
              .toLowerCase()
              .trim()
              .includes(
                SearchAttributes.ComponentFunction.toLowerCase().trim()
              ) &&
            (component.domain
              .toLowerCase()
              .trim()
              .includes(SearchAttributes.domain.toLowerCase().trim()) ||
              SearchAttributes.domain === "") &&
            (component.componentOs.toLowerCase().trim() === "any" ||
              component.componentOs.toLowerCase().trim() ===
                SearchAttributes.componentOs.toLowerCase().trim()) &&
            (component.input
              .toLowerCase()
              .trim()
              .includes(SearchAttributes.componentInput.toLowerCase().trim()) ||
              SearchAttributes.componentInput === "") &&
            (component.output
              .toLowerCase()
              .trim()
              .includes(
                SearchAttributes.componentOutput.toLowerCase().trim()
              ) ||
              SearchAttributes.componentOutput === "") &&
            (SearchAttributes.componentVersion
              .trim()
              .includes(component.version.trim()) ||
              SearchAttributes.componentVersion === "") &&
            component.isPublic !== SearchAttributes.private &&
            SearchAttributes.name.trim() === "") ||
          (component.name
            .toLowerCase()
            .trim()
            .includes(SearchAttributes.name.toLowerCase().trim()) &&
            SearchAttributes.name.trim() !== "")
        ) {
          _searchedComponents.push(component);
        }
      } else {
        if (
          component.techType.toLowerCase() ===
            SearchAttributes.TechType.toLowerCase().trim() &&
          component.componentFunction
            .toLowerCase()
            .trim()
            .includes(SearchAttributes.ComponentFunction.toLowerCase().trim())
        ) {
          _searchedComponents.push(component);
        }
      }
    }

    this.setState({ SearchedComponents: _searchedComponents });
    console.log(this.state.SearchAttributes);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.SearchAttributes !== this.state.SearchAttributes) {
      this.searchComponentsHandler();
    }
    console.log("[didUpdate]");
  }

  componentDidMount() {
    this.callComponents();
    console.log("[didMount]");
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <PageDivision
          searchComponentsHandler={() => this.searchComponentsHandler()}
          components={this.state.SearchedComponents}
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

export default connect(mapStateToProps, mapDispatchToProps)(FindComponents);
