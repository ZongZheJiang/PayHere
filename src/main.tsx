import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import UploadQRPage from "./routes/uploadQR";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "upload/",
    element: <UploadQRPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
