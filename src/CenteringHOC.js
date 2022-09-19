import { Component } from "react";
import "./style.css";

function getCenteredHOC(WrappedComponent) {
  class newComponent extends Component {
    render() {
      let ST = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
      return (
        <>
          <WrappedComponent isCentered={true} ST={ST} />
        </>
      );
    }
  }
  return newComponent;
}
export default getCenteredHOC;
