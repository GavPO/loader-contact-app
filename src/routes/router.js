import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import { rootLoader } from "./loaders/rootLoader";
import { rootAction } from "./actions/rootAction";
import ErrorPage from "../components/ErrorPage";
import Contact from "../components/Contact";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
