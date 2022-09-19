import getCounterHOC from "./HighOrderCounter";

function MouseHoverCounter({ increment, count }) {
  return (
    <>
      <h1>I am Mouse Hover Counter</h1>
      <h2 onMouseEnter={increment}>Hover me to increase counter</h2>
      <h3>You hovered me {count} times</h3>
    </>
  );
}
export default getCounterHOC(MouseHoverCounter);
