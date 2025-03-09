import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted successfully:", values);
        alert("Registration Successful!");
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form style={formStyles}>
          <h2>Register</h2>

          <div>
            <label>Username:</label>
            <Field type="text" name="username" style={inputStyles} />
            <ErrorMessage name="username" component="p" style={errorStyles} />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" style={inputStyles} />
            <ErrorMessage name="email" component="p" style={errorStyles} />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" style={inputStyles} />
            <ErrorMessage name="password" component="p" style={errorStyles} />
          </div>

          <button type="submit" disabled={isSubmitting} style={buttonStyles}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

const formStyles = { width: "300px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" };
const inputStyles = { width: "100%", padding: "8px", margin: "5px 0", border: "1px solid #ccc", borderRadius: "4px" };
const buttonStyles = { width: "100%", padding: "10px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" };
const errorStyles = { color: "red", fontSize: "12px" };

export default FormikForm;