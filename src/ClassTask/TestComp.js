import React from "react";

const abc = (objArr) => {
  objArr.map((item) => {
    return (
      <div>
        <span>{item.name}</span>
        <input type={"checkbox"} />
        {item.child && abc(item.child)}
      </div>
    );
  });
};

const objArray = [
  { name: "A" },
  { name: "B", child: [{ name: "X" }, { name: "Y" }] },
  { name: "C" },
  { name: "D", child: [{ name: "Z", child: [{ name: "K" }] }] },
];
function TestComp() {
  return (
    <div>
      <h3>Hello</h3>

      {objArray.map((item) => {
        return (
          <div>
            <span>{item.name}</span>
            <input type={"checkbox"} />
            {item.child &&
              item.child.map((item2) => {
                return (
                  <div style={{ paddingLeft: 20 }}>
                    <span>{item2.name}</span>
                    <input type={"checkbox"} />
                    {item2.child &&
                      item2.child.map((item3) => {
                        return (
                          <div style={{ paddingLeft: 20 }}>
                            <span>{item3.name}</span>
                            <input type={"checkbox"} />
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        );
      })}

      {/* {abc(objArray)} */}
    </div>
  );
}

export default TestComp;
