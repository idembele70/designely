import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/tools/Header";
import RoutesWrapper from "./component/RoutesWrapper";
function App() {
  return <RoutesWrapper />;
}

export default App;
