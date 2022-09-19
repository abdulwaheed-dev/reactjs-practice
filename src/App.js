import "antd/dist/antd.css";
import ClickCounter from "./ClickCounter";
import KeyPressCounter from "./KeyPressCounter";
import MouseHoverCounter from "./MouseHoverCounter";
import TestingComponent from "./TestingComponent";

function App() {
  return (
    <div>
      <TestingComponent />
      <ClickCounter />
      <MouseHoverCounter />
      <KeyPressCounter />
    </div>
  );
}

export default App;
