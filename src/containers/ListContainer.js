import { connect } from "react-redux";
import List from "../components/Atoms/List/List";

const mapState = (state) => {
  return {
    data: state.currMovies,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {},
});

export default connect(mapState, mapDispatch)(List);
