import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import addonSdk, {
  LogLevel,
  EventOrigin,
  EventType,
  AddonMessage,
} from "@outreach/client-addon-sdk";
import { count } from "console";

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

let counter = 1;

addonSdk.init().then((ctx) => {
  console.debug("[HelloWorld] addonSdk.initialized", { ctx });
  addonSdk.decorate(counter.toString(), "badge");

  setTimeout(() => {
    counter++;
    addonSdk.decorate(counter.toString(), "badge");
  }, 10 * 5000);

  setTimeout(() => {
    counter++;
    addonSdk.notify("Notification #" + counter, "info");
  }, 10 * 10000);
});
