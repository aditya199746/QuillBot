import axios from "axios";

export const MOVIE_DATA = "MOVIE_DATA";
export const CURRENT_DATA = "CURRENT_DATA";
export const SHOW_BURGER = "SHOW_BURGER";

export const setMovieData = (movies) => ({
  type: MOVIE_DATA,
  movies,
});
export const setCurrentData = (curr) => ({
  type: CURRENT_DATA,
  curr,
});
export const setShowBurger = (bool) => ({
  type: SHOW_BURGER,
  bool,
});

export const thunks = {
  setSearch: (title) => (dispatch, getState) => {
    const { allMovies } = getState();
    if (title != undefined || title == null) {
      let currData = allMovies.filter((m) => {
        if (m.Title.toLowerCase().includes(title.toLowerCase())) {
          return m;
        } else {
          return;
        }
      });

      dispatch(setCurrentData(currData));
    } else {
      dispatch(setCurrentData(allMovies));
    }
  },
};
