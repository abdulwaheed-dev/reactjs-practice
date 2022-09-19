import getCounterHOC from "./HighOrderCounter";

function ClickCounter(props) {
  const { increment, count } = props;
  return (
    <>
      <h1>I am Click Counter</h1>
      <h1 onClick={increment}>Click Me!</h1>
      <h3>You clicked me {count} times.</h3>
    </>
  );
}
export default getCounterHOC(ClickCounter);
