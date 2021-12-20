import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { decrementValue, incrementValue, resetValue } from "../actions";
import Counter from "../components/counter";

const mapStateToProps = state => {
  return state;
  //state.counterReducer.count -> Send only count
};

const mapDispatchToProps = dispatch => {
  //return {
  // increment() {
  //   dispatch(incrementValue());
  // },

  // decrement() {
  //   dispatch(decrementValue());
  // },
  // reset() {
  //   dispatch(resetValue());
  // }
  //}

  return bindActionCreators(
    {
      incrementValue,
      decrementValue,resetValue
    },
    dispatch
  );



};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);