import React from "react";
import "@styles/components/Input.scss";

const Input = ({ o }) => {
  return (
    <div className="input-container">
      <input
        className={`input ${o.styles}`}
        type={o.type}
        id={o.id}
        value={o.value}
        onChange={o.onChange}
        placeholder="ph"
        required
      />

      <label className={`label ${o.labelStyle}`} htmlFor={o.id}>
        {o.text}
      </label>
    </div>
  );
};

export default Input;
