import NotFound from "../pages/404/NotFound";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import SingleCard from "../pages/SingleCard/SingleCard";

export const routes = [
  {
    path: "/", component: Home, exact: true,
  },
  {
    path: "/about", component: About, exact: true,
  },
  {
    path: "/logement/:id", component: SingleCard, exact: true,
  },
  {
    path: "*", component: NotFound, exact: true,
  }
];