import React, { useState } from "react";

function TestComp({ objArray }) {
  const [isVisible, setIsVisible] = useState(false);
  const expend = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      {objArray.map((item) => {
        return (
          <div style={{ paddingLeft: 15 }}>
            <span onClick={expend}>{item.name}</span>
            {item.child ? (
              isVisible ? (
                <TestComp objArray={item.child} />
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </>
  );
}

export default TestComp;
