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
  <div>
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
      />
      {errors.name && <div>{errors.name}</div>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />
      {errors.email && <div>{errors.email}</div>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />
      {errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={Object.keys(errors).length > 0}>
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
