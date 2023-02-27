import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import { rootLoader } from "./loaders/rootLoader";
import { rootAction } from "./actions/rootAction";
import { contactLoader } from "./loaders/contactLoader";
import { editContactAction } from "./actions/editContactAction";
import { deleteContactAction } from "./actions/deleteContactAction";
import ErrorPage from "../components/ErrorPage";
import Contact from "../components/Contact";
import EditContact from "../components/EditContact";
import Index from "../components/Index";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editContactAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteContactAction,
      },
    ],
  },
]);
