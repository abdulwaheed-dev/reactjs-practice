import "antd/dist/antd.css";
import ClickCounter from "./ClickCounter";
import KeyPressCounter from "./KeyPressCounter";
import MouseHoverCounter from "./MouseHoverCounter";

function App() {
  return (
    <div>
      <ClickCounter />
      <KeyPressCounter />
      <MouseHoverCounter />
    </div>
  );
}

export default App;
