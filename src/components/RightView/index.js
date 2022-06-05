import React from "react";
import "./style.scss";
import Search from "../../containers/SearchContainer";
import List from "../../containers/ListContainer";
const Index = () => {
  return (
    <div className="right-container">
      <Search />
      <List />
    </div>
  );
};

export default Index;
