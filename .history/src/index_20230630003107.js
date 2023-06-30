import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./fonts/wotfard-cufonfonts-webfont/style.css";
import postList from "./posts.json";

import "./index.css";
import App from "./App";
import ErrorPage from "./ErrorBoundary";
import PostPage from "./pages/PostPage/PostPage";
import Home from "./pages/Home/Home";
import ErrorBoundary from "./ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/posts/:id",
        element: <PostPage postList={postList} setPostPage={setPostPage} />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
