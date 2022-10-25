import React from "react";

function TestComp({ objArray }) {
  return (
    <>
      {objArray.map((item) => {
        return (
          <div style={{ paddingLeft: 15 }}>
            <input type={"checkbox"} />
            <span>{item.name}</span>
            {item.child ? <TestComp objArray={item.child} /> : <></>}
          </div>
        );
      })}
    </>
  );
}

export default TestComp;
