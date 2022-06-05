import { connect } from "react-redux";
import { thunks } from "../actions";
import Search from "../components/Atoms/Search/Search";
import data from "../data";
const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => ({
  setSearch: (val) => {
    dispatch(thunks.setSearch(val));
  },
});

export default connect(mapState, mapDispatch)(Search);
