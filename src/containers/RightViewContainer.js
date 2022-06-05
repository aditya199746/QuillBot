import { connect } from "react-redux";
import { thunks } from "../actions";
import RightView from "../components/RightView";
import data from "../data";
const mapState = (state) => {
  return {
    data: data.movies,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {},
});

export default connect(mapState, mapDispatch)(RightView);
