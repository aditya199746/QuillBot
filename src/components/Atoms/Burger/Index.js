import React from "react";
import "./style.scss";

const Index = ({ show, setShow }) => {
  const handle = () => {
    setShow(!show);
  };
  return (
    <button className="burger" onClick={handle}>
      <div />
      <div />
      <div />
    </button>
  );
};

export default Index;
