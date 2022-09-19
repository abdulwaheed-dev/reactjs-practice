import { Component } from "react";

function getCounterHOC(WrappedComponent) {
  class newComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <>
          <WrappedComponent
            increment={this.increment}
            count={this.state.count}
          />
        </>
      );
    }
  }

  return newComponent;
}
export default getCounterHOC;
