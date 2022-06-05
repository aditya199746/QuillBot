import * as actions from "../actions";
import data from "../data";
import { combineReducers } from "redux";

export const allMovies = (state = [...data.movies], { type, movies }) => {
  switch (type) {
    case actions.MOVIE_DATA:
      allMovies.map((a) => {});
      return movies;

    default:
      return state;
  }
};

export const currMovies = (state = [...data.movies], { type, curr }) => {
  switch (type) {
    case actions.CURRENT_DATA:
      return curr;

    default:
      return state;
  }
};

export const showBurger = (state = false, { type, bool }) => {
  switch (type) {
    case actions.SHOW_BURGER:
      return bool;

    default:
      return state;
  }
};

export default combineReducers({
  allMovies,
  currMovies,
  showBurger,
});
