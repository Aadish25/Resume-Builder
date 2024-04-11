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
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import AdditionalExp from "./components/AdditionalExp/AdditionalExp.jsx";
import Summary from "./components/Summary/Summary.jsx";
import Download from "./components/Download/Download.tsx";
import { SignupHome } from "./components/Signup/SignupHome.jsx";
import { LoginHome } from "./components/Login/LoginHome.jsx";
import SnackBar from "./components/SnackBar/SnackBar.jsx";
import ChooseTemplates from "./components/ChooseTemplates/ChooseTemplates.jsx";
import ATS from "./components/ATS/ATS.jsx";
import Editor from "./components/Editor/Editor.jsx";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupHome />,
  },
  {
    path: "/login",
    element: <LoginHome />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/choose-template",
    element: <ChooseTemplates />,
  },
  {
    path: "/editor",
    children: [
      {
        path: "/editor/details",
        element: <Editor />,
      },
      {
        path: "/editor/education",
        element: <Editor />,
      },
      {
        path: "/editor/work-experience",
        element: <Editor />,
      },
      {
        path: "/editor/projects",
        element: <Editor />,
      },
      {
        path: "/editor/skills",
        element: <Editor />,
      },
      {
        path: "/editor/additional-experience",
        element: <Editor />,
      },
      {
        path: "/editor/summary",
        element: <Editor />,
      },
    ],
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/ats-score",
    element: <ATS />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackBar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
