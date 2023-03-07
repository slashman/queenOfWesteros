import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App.component.js";
import storeFactory from "./store";

const store = storeFactory();

window.React = React;
// @ts-ignore
window.store = store;

render(<div>Bastard</div>, document.getElementById("app"));
