import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";

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
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/students/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
