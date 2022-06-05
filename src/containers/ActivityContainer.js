import { connect } from "react-redux";
import { thunks } from "../actions";
import Activity from "../components/Activity";
import data from "../data";
const mapState = (state) => {
  return {
    data: data,
    show: state.showBurger,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {},
});

export default connect(mapState, mapDispatch)(Activity);
