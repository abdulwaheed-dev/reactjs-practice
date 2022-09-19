import getCenteredHOC from "./CenteringHOC";

function TestingComponent({ isCentered, ST, props }) {
  return (
    <div style={ST} {...props}>
      <h1>
        {isCentered ? <span>Yes</span> : <span>No</span>} Hello, I am centering
        component
      </h1>
    </div>
  );
}
export default getCenteredHOC(TestingComponent);
