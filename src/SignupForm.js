import { useFormik } from "formik";
import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "WAHEED",
      email: "",
    },
    // you can do api calls here..
    onSubmit: (values) => {
      setFormData(values);
    },
    //doing custom validation here..
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is Required!";
      }
      if (!values.email) {
        errors.email = "Email is Required!";
      } else if (values.email.test()) {
        ///^[A-Z0-9._%+-]+@[A-Z0-9.-]+
      }
      return errors;
    },
  });

  return (
    <>
      <span>{JSON.stringify(formik.values)}</span>
      <span>{JSON.stringify(formik.touched)}</span>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginTop: 10, marginLeft: 10 }}>
          <label>Full Name:</label> <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Full Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <span style={{ color: "red" }}> {formik.errors.name}</span>
          )}
          <br />
          <label>Email:</label> <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <span style={{ color: "red" }}> {formik.errors.email}</span>
          )}
          <br />
          <input type="submit" value="Signup" />
        </div>
      </form>
      <h4>Errors</h4>
      <p>{JSON.stringify(formik.errors)}</p>
      <h4>Form Data:</h4>
      <p>{JSON.stringify(formData)}</p>
    </>
  );
}
export default SignupForm;
