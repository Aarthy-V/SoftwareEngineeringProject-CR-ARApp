import React from "react";
import "../Styles/TableStyles.css";
import { Icon1, Icon2 } from "./MyIcon"; // Import the icons

function Table2({ list, colNames, width = 'auto', height = 'auto' }) {
  return (
    <div>
      <div className="table-wrapper">
        {list.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                {colNames.map((headerItem, index) => (
                  <th className="expand" key={index}>
                    {headerItem.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.map((rowData, index) => (
                <tr className="expand" key={index}>
                  {colNames.map((colName, index2) => (
                    <td key={index2}>
                      {colName === "Advisor" || colName === "View"
                        ? rowData[colName]
                        : rowData[colName]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Table2;
