import React from "react";
import "@styles/components/Input.scss";

const Input = ({ type, id, text, value, onChange, styles }) => {
  return (
    <div className="input-container">
      <input
        className={`input ${styles}`}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder="ph"
      />

      <label className="label" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default Input;
