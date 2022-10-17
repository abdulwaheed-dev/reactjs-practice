import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <>
      <button onClick={() => props.dispatch({ type: "DECREMENT_ONE" })}>
        Decrement
      </button>
      <span>Count: {props.count}</span>
      <button onClick={() => props.dispatch({ type: "INCREMENT_ONE" })}>
        Increment
      </button>
    </>
  );
}
const mapStateToProp = (state) => {
  return { count: state.count };
};
export default connect(mapStateToProp)(Counter);
