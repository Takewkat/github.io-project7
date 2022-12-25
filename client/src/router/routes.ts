import NotFound from "../pages/404-page/NotFound";
import About from "../pages/About-page/About";
import Home from "../pages/Home-page/Home";
import SingleCard from "../pages/SingleCard-page/SingleCard";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/logement/:id",
    component: SingleCard,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
    exact: true,
  },
];
