import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./app/store.js";
import Details from "./components/Details/Details.jsx";
import Home from "./components/Home/Home.tsx";
import Work from "./components/Work/Work.jsx";
import Education from "./components/Education/Education.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/editor",
    children: [
      {
        path: "/editor/details",
        element: <Details />,
      },
      {
        path: "/editor/work-experience",
        element: <Work />,
      },

      {
        path: "/editor/education",
        element: <Education />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
