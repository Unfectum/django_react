import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import store from "./redux/store";
import { Provider } from "react-redux";
import { App } from "./App/App";
import { Spiner } from "./components/Spiner/Spiner";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spiner />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
