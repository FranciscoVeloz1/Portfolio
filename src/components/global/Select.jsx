import React from "react";
import "@styles/components/Select.scss";

const Select = ({ o }) => {
  return (
    <div className="select-container">
      <label className={`select-label ${o.labelStyle}`}>{o.text}</label>
      <select className={`select ${o.styles}`} onChange={o.onChange}>
        <option value={o.value}>{o.value}</option>
        {o.options !== undefined && o.options.length > 0
          ? o.options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default Select;
