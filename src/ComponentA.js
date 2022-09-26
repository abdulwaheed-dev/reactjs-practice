import ComponentB from "./ComponentB";

export default function ComponentA() {
  return (
    <>
      <h3>I am Component A</h3>
      <h2>Child Component == </h2>
      <ComponentB />
    </>
  );
}
