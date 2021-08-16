import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import addonSdk, {
  LogLevel,
  EventOrigin,
  EventType,
} from "@outreach/client-addon-sdk";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let counter = 0;

addonSdk.init().then((ctx) => {
  console.debug("[HelloWorld] addonSdk.initialized", { ctx });

  setTimeout(() => {
    
    addonSdk.decorate((counter++).toString(), "badge");
  }, 10 * 1000);
});
