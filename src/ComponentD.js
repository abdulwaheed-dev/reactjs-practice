import React from "react";
import { StudentConsumer } from "./UserContext";
class ComponentD extends React.Component {
  render() {
    return (
      <StudentConsumer>
        {(props) => {
          return <div>I am {props.name}.</div>;
        }}
      </StudentConsumer>
    );
  }
}
export default ComponentD;
