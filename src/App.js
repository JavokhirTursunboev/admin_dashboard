import React from "react";
import "./app.css";
import Sidebar from "./components/Sidebar/Sidebar";

import Topbar from "./components/Topbar/Topbar";
import Home from "./home/Home";

const App = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
};

export default App;
