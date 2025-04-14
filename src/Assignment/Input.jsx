import React from "react";
import { useState } from "react";

const Input = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!input || !age || !phone) return;
    onSubmit(input, age, phone);
    setInput("");
    setAge("");
    setPhone("");
  };

  return (
    <div className="d-flex gap-3 justify-content-center align-items-center mt-5 mb-5">
      <label>NAME : </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ height: "38px", width: "200px" }}
      />
      <label>AGE : </label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ height: "38px", width: "200px" }}
      />
      <label>PHONE : </label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ height: "38px", width: "200px" }}
      />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default Input;
