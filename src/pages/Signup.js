import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Signup submitted!");
  };

  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-2 border rounded"
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Signup;