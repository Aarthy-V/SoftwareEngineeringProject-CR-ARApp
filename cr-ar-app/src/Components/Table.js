import React from "react";
import "../Styles/TableStyles.css";

function Table({list, colNames, width = 'auto', height = 'auto'}) {
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
                        {Object.values(list).map((obj, index) => (
                            <tr className="expand" key={index}>
                                {Object.values(obj).map((value,index2) => (
                                    <td key={index2}>
                                        {value}
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

export default Table;