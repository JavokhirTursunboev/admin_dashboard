import React from "react";
import "./app.css";
import Sidebar from "./components/Topbar/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

const App = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="other"> other pages</div>
      </div>
    </>
  );
};

export default App;
