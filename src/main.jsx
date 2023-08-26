import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import UploadPage from "./routes/uploadQR";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/upload",
    element: <UploadPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
