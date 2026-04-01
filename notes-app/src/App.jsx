import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ViewNotes from "./components/ViewNotes";
import Home from "./components/Home";
import Notes from "./components/Notes";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/notes",
    element: (
      <div>
        <Navbar />
        <Notes />
      </div>
    ),
  },
  {
    path: "/notes:id",
    element: (
      <div>
        <Navbar />
        <ViewNotes />
      </div>
    ),
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
