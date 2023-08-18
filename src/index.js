import ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Ourteam from "./pages/ourteam/Ourteam"
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/ourteam",
      element: <Ourteam/>,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );
  