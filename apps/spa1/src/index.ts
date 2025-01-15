import singleSpaReact from "single-spa-react";
import { RootComponent } from "./RootComponent";
import ReactDOMClient from "react-dom/client";
import React from "react";

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: RootComponent,
});
