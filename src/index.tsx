import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ReportIssueForm } from "./form";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <ReportIssueForm />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
