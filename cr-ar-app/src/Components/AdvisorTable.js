import React from "react";
import "../Styles/AdvisorTableStyles.css";
import "../Styles/Tickbox.css";

function AdvisorTable({list, colNames, width = 'auto', height = 'auto'}) {
    return (
        <div>
        <div className="advtable-wrapper">
            {list.length > 0 && (
                <table className="advtable">
                    <thead>
                        <tr>
                            {colNames.map((headerItem, index) => (
                                <th className="advexpand" key={index}>
                                    {headerItem.toUpperCase()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(list).map((obj, index) => (
                            <tr className="advexpand" key={index}>
                                <td>
                                <label>
                                    <input type="checkbox"/>
                                    <span className="checkbox"></span>
                                </label>
                                </td>
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

export default AdvisorTable;