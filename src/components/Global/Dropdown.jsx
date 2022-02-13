import React, { useEffect } from "react";
import "@styles/components/Dropdown.scss";

const Dropdown = ({ styles, setFilter, filters }) => {
  const { headers, objectKeys } = filters;
  const data = headers === undefined ? objectKeys : headers;

  return (
    <div className={`dropdown-container ${styles}`}>
      <div className="dropdown-content">
        <ul>
          {data !== undefined && data.length > 0
            ? data.map((d) => (
                <li key={d}>
                  <input
                    type="radio"
                    name="c"
                    id={d}
                    onChange={() => setFilter(d)}
                  />
                  <label htmlFor={d} className="ml-1">
                    {d}
                  </label>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
