import { connect } from "react-redux";
import { setShowBurger, thunks } from "../actions";
import LeftView from "../components/LeftView";
import data from "../data";
const mapState = (state) => {
  return {
    contents: data.contents,
    show: state.showBurger,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftView);
