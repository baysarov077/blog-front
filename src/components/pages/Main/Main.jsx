import React from "react";
import Features from "../../components/Features/Features";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Starting from "../../components/StartComponent.jsx/Starting";

const Main = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Starting />
      </div>
      <Features />
    </div>
  );
};

export default Main;
