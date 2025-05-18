import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import "./App.css";

const Form = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  const sanitize = (v) => DOMPurify.sanitize(v.trim());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: sanitize(value) }));
  };

  useEffect(() => {
    const errs = {};
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,4}$/;
    if (!data.name) errs.name = "Name is required";
    if (!emailRegex.test(data.email)) errs.email = "Valid email required";
    if (!data.password) errs.password = "Password required";
    else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])/.test(data.password))
      errs.password = "Weak password";
    setErrors(errs);
    setValid(Object.keys(errs).length === 0);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      setSubmitted(data);
      setData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {["name", "email", "password"].map((field) => (
          <div key={field}>
            <input
              type={field === "password" ? "password" : field}
              name={field}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              value={data[field]}
              onChange={handleChange}
              className={errors[field] ? "error" : ""}
            />
            {errors[field] && <div>{errors[field]}</div>}
          </div>
        ))}
        <button type="submit" disabled={!valid}>
          Submit
        </button>
      </form>
      {submitted && (
        <div>
          <p>✅ Form submitted!</p>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Password: {submitted.password}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
