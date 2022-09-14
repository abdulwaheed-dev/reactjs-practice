import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>I am Click Counter</h1>
      <h1 onClick={handleChange}>Click Me!</h1>
      <h3>Clicked {count} Times</h3>
    </>
  );
}
export default ClickCounter;
