import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./components/store/reducer";

axios.defaults.baseURL = "http://localhost:8080";
// axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
