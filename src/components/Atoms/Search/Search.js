import React, { useState } from "react";
import "./style.scss";
import SearchIcon from "@material-ui/icons/Search";
const Search = ({ setSearch }) => {
  const [show, setShow] = useState(true);
  const handleChange = (val) => {
    setSearch(val);
  };
  const bounce = (fun) => {
    let timer;
    return (val) => {
      clearTimeout(timer);
      timer = setTimeout(() => fun(val), 500);
    };
  };
  const debounce = bounce(handleChange);
  const handle = () => {
    setShow(true);
  };
  return (
    <div className={`box-container ${show ? "" : "trans"}`}>
      <span onClick={() => setShow(false)}>
        <SearchIcon />
      </span>
      <input placeholder="search" onChange={(e) => debounce(e.target.value)} />
      <button className="x-button" onClick={handle}>
        X
      </button>
    </div>
  );
};

{
  /* <div className={`edit-input ${!show ? "anim" : ""}`}>
        {show ? (
          <button className="search-btn" onClick={() => setShow(false)}>
            <SearchIcon />
          </button>
        ) : (
          <>
            <span className={`search-edit-btn ${!show ? "anim" : ""}`}>
              <SearchIcon />
            </span>
            <input
              placeholder="search"
              onChange={(e) => debounce(e.target.value)}
            />
            <button onClick={() => setShow(true)}>X</button>
          </>
        )}
      </div> */
}
export default Search;
