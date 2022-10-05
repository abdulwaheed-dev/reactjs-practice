import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function UseRefExample() {
  const countRef = useRef(0);
  const inputRef = useRef();
  const [count, setCount] = useState(0);
  //let id = undefined;
  const intervalRef = useRef();

  //console.log(countRef);

  function reset() {
    //console.log("ID=>" + intervalRef.current);
    setCount(0);
    clearInterval(intervalRef.current);
  }

  useEffect(function () {
    intervalRef.current = setInterval(function () {
      setCount((count) => count + 1);
    }, 1000);
    return function () {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h2>UseRefExample</h2>
      <input ref={inputRef} type="text" name="name" />
      <br />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Print Value
      </button>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        FocusIn
      </button>
      <button
        onClick={() => {
          inputRef.current.blur();
        }}
      >
        FocusOut
      </button>
      <h3>Count1_useRef: {countRef.current}</h3>
      <button
        onClick={() => {
          countRef.current = countRef.current + 1;
          console.log(countRef.current);
        }}
      >
        Count++_useRef
      </button>
      <h3>Count2_useState: {count}</h3>
      <button onClick={reset}>Clear</button>
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count++_useState
      </button> */}
    </div>
  );
}
export default UseRefExample;
