import FacultyContext, { FacultyConsumer } from "./FacultyContext";
import StudentContext, { StudentConsumer } from "./UserContext";
import { useContext } from "react";

export default function ComponentC(props) {
  const student = useContext(StudentContext);
  const faculty = useContext(FacultyContext);
  return (
    <>
      <h3>I am Component C</h3>
      <span>{faculty} is from CS Faculty.</span>
      <span>
        I am {student.name} and I am {student.age}. I am {student.gender}.
      </span>
      {/* <StudentConsumer>
        {(user) => {
          return (
            <>
              <FacultyConsumer>
                {(name) => {
                  return (
                    <>
                      <span>I am {name} from CS Faculty.</span>
                    </>
                  );
                }}
              </FacultyConsumer>
              <span>
                I am {user.name}, I am {user.age} years old and I am{" "}
                {user.gender}
              </span>
            </>
          );
        }}
      </StudentConsumer> */}
    </>
  );
}
