import React from "react";
import Input from "./Input";
import "@styles/components/Table.scss";

const Table = ({ o }) => {
  return (
    <div className="table-container">
      <div className="table-header">
        <p className="table-title">{o.title}</p>

        <div className="search-container">
          <div className="search-content">
            <Input
              type={"text"}
              id={"txtsearch"}
              text="Search..."
              styles={"table-search"}
            />

            <button className="">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="filter-container">
            <i className="fas fa-sliders-h filter-icon"></i>
          </div>
        </div>
      </div>

      <div className="table-content">
        <table className="table">
          <thead>
            <tr>
              <th>Example</th>
              <th>Example</th>
              <th>Example</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>ExampleA</td>
              <td>ExampleB</td>
              <td>
                <i className="fas fa-trash-alt table-icon"></i>
                <i className="fas fa-edit table-icon"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
