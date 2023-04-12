import React from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./Components/Header";

import Home from "./Pages/Home";
import Intro from "./Pages/Intro";
// import DrawerNavigate from "./Pages/MenuPage";






import "./assets/css/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  }
]);

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="menupage"  element={<DrawerNavigate />} /> */}
        <Route path='intro' element={<Intro />} />
        

      </Routes>
    </>
  );
}
