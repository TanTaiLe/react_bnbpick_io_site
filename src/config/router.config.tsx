import { Login } from "@screen/Account/Login";
import { Home } from "@screen/Home";

export interface IRouteConfig {
  name: string;
  path: string;
  component: JSX.Element;
}

export const routes: Array<IRouteConfig> = [
  {
    name: "home",
    path: "/",
    component: (
      <Home />
    ),
  }, {
    name: "legin",
    path: "/login",
    component: (
      <Login />
    ),
  },

];
