import React from "react";
import { connect } from "react-redux";
import BurgerComp from "../components/Atoms/Burger/Index";
import { setShowBurger } from "../actions";
import data from "../data";
const mapState = (state) => {
  return {
    contents: data.contents,
    show: state.showBurger,
  };
};

const mapDispatch = (dispatch) => ({
  setShow: (show) => {
    dispatch(setShowBurger(show));
  },
});
export default connect(mapState, mapDispatch)(BurgerComp);
