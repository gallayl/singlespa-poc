import { registerApplication, start } from "single-spa";
import React from "react";
import { createRoot } from "react-dom/client";
import { RootComponent } from "./RootComponent";

registerApplication({
  name: "app1",
  // @ts-ignore
  app: () => import("http://localhost:3001/src/index.ts"),
  activeWhen: "/app1",
});

registerApplication({
  name: "app2",
  // @ts-ignore
  app: () => import("http://localhost:3002/src/index.ts"),
  activeWhen: "/app2",
});

start({});

const root = createRoot(document.getElementById("root"));

root.render(<RootComponent />);
