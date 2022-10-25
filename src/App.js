import "antd/dist/antd.css";
import TestComp from "./ClassTask/TestComp";

function App() {
  const objArr = [
    { name: "A" },
    { name: "B", child: [{ name: "X" }, { name: "Y" }] },
    { name: "C" },
    {
      name: "D",
      child: [
        {
          name: "Z",
          child: [{ name: "K", child: [{ name: "P" }, { name: "Q" }] }],
        },
      ],
    },
  ];
  return (
    <div>
      <TestComp objArray={objArr} />
    </div>
  );
}

export default App;
