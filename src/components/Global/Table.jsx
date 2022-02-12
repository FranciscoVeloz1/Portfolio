import React from "react";
import "@styles/components/Table.scss";

const Table = () => {
  return (
    <div className="table-responsive">
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
              <button className="btn btn-sm btn-red ml-1">
                <i className="fas fa-trash-alt"></i>
              </button>

              <button className="btn btn-sm btn-info ml-1">
                <i className="fas fa-edit"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
