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
            ? objectKeys.map((o, index) => (
                <li key={o}>
                  <input
                    type="radio"
                    name="c"
                    id={o}
                    onChange={() => setFilter(o)}
                  />
                  <label htmlFor={o} className="ml-1">
                    {headers[index]}
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
