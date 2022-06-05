import { connect } from "react-redux";
import { thunks } from "../actions";
import NavBar from "../components/Atoms/Navbar/NavBar";
import data from "../data";
const mapState = (state) => {
  return {
    contents: data.contents,
    show: state.showBurger,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {},
});

export default connect(mapState, mapDispatch)(NavBar);
