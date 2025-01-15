import { registerApplication, start } from "single-spa";

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
