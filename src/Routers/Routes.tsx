import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About } from "../Pages/About/About";
import { Products } from "../Pages/Products/Products";
import { Contact } from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
