import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Redux stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(
        reducers /* preloaded state */,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
