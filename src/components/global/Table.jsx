import React, { useState, useMemo, useEffect } from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import "@styles/components/Table.scss";

const Table = ({ o }) => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("id");

  const filters = {
    objectKeys: Object.keys(o.data[0] === undefined ? [] : o.data[0]),
    headers: o.headers,
  };

  const info = useMemo(() => {
    if (o.data !== undefined && o.data !== null && o.data.length > 0) {
      return o.data.filter((d) => {
        for (let i = 0; i < Object.keys(d).length; i++) {
          const key = Object.keys(d)[i];
          if (key === filter) {
            return Object.values(d)
              [i].toString()
              .toLowerCase()
              .includes(search.toLowerCase());
          }
        }
      });
    }
  }, [o.data, search]);

  const inputOptions = {
    type: "text",
    id: "txtsearch",
    text: "Search...",
    styles: "table-search",
    labelStyle: "bg-white",
    onChange: (e) => setSearch(e.target.value),
    value: search,
  };

  useEffect(() => {}, []);

  return (
    <div className="table-container" onMouseUp={() => setToggle(false)}>
      <div className="table-header">
        <p className="table-title">{o.title}</p>

        <div className="search-container">
          <div className="search-content">
            <Input o={inputOptions} />

            <button>
              <i className="fas fa-search"></i>
            </button>

            <div className="filter-container">
              <i
                className="fas fa-sliders-h filter-icon"
                onClick={() => setToggle(!toggle)}
              ></i>

              <Dropdown
                styles={toggle ? "dropdown-active" : null}
                setFilter={setFilter}
                filters={filters}
              />
            </div>
          </div>

          <div className="add-container">
            <Link to={o.addLink} className="btn btn-blue">
              <i className="fas fa-plus"></i>
              {o.btnAdd}
            </Link>
          </div>
        </div>
      </div>

      <div className="table-content">
        <table className="table">
          <thead>
            <tr>
              {o.headers === undefined &&
              o.data !== undefined &&
              o.data.length > 0
                ? Object.entries(o.data[0]).map((o) => <th key={o}>{o[0]}</th>)
                : null}

              {o.headers !== undefined
                ? o.headers.map((h) => <th key={h}>{h}</th>)
                : null}

              {o.data !== undefined && o.data.length > 0 ? (
                <th>Acciones</th>
              ) : null}
            </tr>
          </thead>

          <tbody>
            {info !== undefined && info.length > 0
              ? info.map((i) => (
                  <tr key={i.id}>
                    {Object.values(i).map((o) => (
                      <td key={o + Math.random()}>{o}</td>
                    ))}
                    <td>
                      <Link
                        to={`${o.editLink}/${i.id}`}
                        className="btn btn-info"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>

                      <button
                        className="btn btn-red"
                        onClick={() => o.delete(i.id, Object.values(i)[1])}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
