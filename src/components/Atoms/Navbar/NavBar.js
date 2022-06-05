import React, { useEffect, useRef } from "react";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import SearchIcon from "@material-ui/icons/Search";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import TvIcon from "@material-ui/icons/Tv";
import ListIcon from "@material-ui/icons/List";
import UpdateIcon from "@material-ui/icons/Update";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./style.scss";
import { isMobile } from "react-device-detect";
const NavBar = ({ contents, show }) => {
  let animRef = useRef();

  const componenets = (name) => {
    switch (name) {
      case "Discover":
        return <SearchIcon key={name} />;
      case "Playlist":
        return <PlaylistPlayIcon />;
      case "Movie":
        return <LiveTvIcon />;
      case "TV Shows":
        return <TvIcon />;
      case "My List":
        return <ListIcon />;
      case "Watch Later":
        return <UpdateIcon />;
      case "Recommended":
        return <FavoriteBorderIcon />;
      case "Setting":
        return <SettingsIcon />;
      case "Logout":
        return <ExitToAppIcon />;
    }
  };

  return (
    <div
      className={`left-container ${
        isMobile ? (show ? "show-nav" : "hide-nav") : ""
      } `}
      ref={animRef}
      key="left_contaier"
    >
      <div className="photo-container" key="photo_container">
        <div className="photo" key="p_container"></div>
        <label className="name">Eric Hoffman</label>
      </div>
      <div className="divider-1" key="divider"></div>
      <div className="content-container" key="content_container">
        {contents.map((c, idx) => {
          return (
            <React.Fragment>
              {c !== "" ? (
                <div className="left-buttons" key={`left${idx}`}>
                  <span className="content-img" key={`img${idx}`}>
                    {componenets(c)}
                  </span>
                  <div key={`name${idx}`}>{c}</div>
                </div>
              ) : (
                <div
                  className={c === "" ? `divider-1` : ""}
                  key={`divider${idx}`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
