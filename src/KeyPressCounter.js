import { Input } from "antd";
import { useState } from "react";
import "./style.css";

function KeyPressCounter() {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>I am Key Press Counter</h1>
      <Input
        onKeyDown={handleChange}
        className="textbox"
        size="large"
        name="counter"
        placeholder="Type something to count keys"
      />
      <h3>You pressed keyboard keys {count} times</h3>
    </>
  );
}
export default KeyPressCounter;
