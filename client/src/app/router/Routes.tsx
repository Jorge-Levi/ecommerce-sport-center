import { createBrowserRouter } from "react-router-dom";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
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
    ],
  },
]);

export default Routes;
