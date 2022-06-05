import React, { useRef, useState } from "react";
import Details from "../Details/Details";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./style.scss";
const List = ({ data }) => {
  const [show, setShow] = useState(null);
  const numRef = useRef();

  const res = [];
  for (let i = 0; i < data.length; i += 5) {
    const chunk = data.slice(i, i + 5);
    res.push(chunk);
  }

  const handleClick = (e) => {
    numRef.current = e.target.dataset.idx;

    setShow(e.target.id);
  };

  let detailsData =
    show &&
    data.filter((d) => {
      if (d.id == show) {
        return d;
      } else {
        return;
      }
    });

  return (
    <div className="content-wrapper">
      {res.length !== 0 ? (
        res.map((cards, idx) => {
          return (
            <>
              {show && numRef.current == idx ? (
                <Details details={detailsData[0]} />
              ) : null}
              <div className="cards-wrapper" key={`content${idx}`}>
                {cards.map((card) => {
                  return (
                    <>
                      <div
                        id={card.id}
                        className="movie-card"
                        data-idx={idx}
                        onClick={handleClick}
                        key={card.id}
                      >
                        <img
                          src={card.Poster}
                          alt="poster"
                          key={`img${card.id}`}
                        />
                        <span key={`title${card.id}`}> {card.Title}</span>
                        <div className="btn-wrapper">
                          <PlayCircleOutlineIcon />
                          <AddCircleOutlineIcon />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })
      ) : (
        <p>No search results found</p>
      )}
    </div>
  );
};

export default List;
