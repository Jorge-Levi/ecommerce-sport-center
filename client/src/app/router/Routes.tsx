import { createBrowserRouter, Navigate } from "react-router-dom";
import BasketPage from "../../features/basket/basketPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import NotFound from "../errors/NotFoundError";
import ServerError from "../errors/ServerError";
import App from "../layout/App";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "store", element: <Catalog></Catalog> },
      { path: "store/:id", element: <ProductDetails></ProductDetails> },
      { path: "contact", element: <ContactPage></ContactPage> },
      { path: "basket", element: <BasketPage></BasketPage> },
      { path: "not-found", element: <NotFound></NotFound> },
      { path: "server-error", element: <ServerError></ServerError> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);

export default Routes;
