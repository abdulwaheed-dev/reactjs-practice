import "antd/dist/antd.css";
import ComponentA from "./ComponentA";
import { StudentConsumer, StudentProvider } from "./UserContext";
import { FacultyProvider } from "./FacultyContext";
import ComponentD from "./ComponentD";
// import ClickCounter from "./ClickCounter";
// import KeyPressCounter from "./KeyPressCounter";
// import MouseHoverCounter from "./MouseHoverCounter";
//import SignupForm from "./SignupForm";
//import TestingComponent from "./TestingComponent";

function App() {
  const user = { name: "Abdul Waheed", age: 21, gender: "Male" };
  const name = "Khalid Dheto";
  return (
    <div>
      <StudentProvider value={user}>
        <FacultyProvider value={name}>
          <ComponentA />
          <ComponentD />
        </FacultyProvider>
      </StudentProvider>
      {/* <ComponentA /> */}
      {/* <SignupForm /> */}
      {/* <TestingComponent />
      <ClickCounter />
      <MouseHoverCounter />
      <KeyPressCounter /> */}
    </div>
  );
}

export default App;
