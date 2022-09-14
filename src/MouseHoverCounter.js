import { useState } from "react";

function MouseHoverCounter() {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>I am Mouse Hover Counter</h1>
      <h2 onMouseEnter={handleChange}>Hover me to increase counter</h2>
      <h3>Hover {count} times</h3>
    </>
  );
}
export default MouseHoverCounter;
