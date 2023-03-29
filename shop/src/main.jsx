import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Userprovider from "./Components/Context/userDetail";
import Cart from "./Components/Cart/Cart";
import Signup from "./Components/Signup/Signup";
import "./index.css";
import Loading from "./Components/Loading/Loading";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Loading",
    element: <Loading />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Userprovider>
    <RouterProvider router={router} />
  </Userprovider>
);
