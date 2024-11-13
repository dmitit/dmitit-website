import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CoreWorks from "./pages/CoreWorks";
import CoreContact from "./pages/CoreContact";
import CoreMain from "./pages/CoreMain";
import Core404Error from "./pages/Core404Error";
import PageAboutUs from "./pages/PageAboutUs";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <Core404Error />,
      children: [
         { path: "/", element: <CoreMain /> },
         { path: "/works", element: <CoreWorks /> },
         { path: "/contact", element: <CoreContact /> },
         { path: "/about-us", element: <PageAboutUs /> },
      ],
   },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
);
