import HomePage from "../pages/HomePage/HomePage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
const routes = [
  { path: "/", page: HomePage, isShowHeader: true },
  {
    path: "/login",
    page: LoginPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];

export default routes;
