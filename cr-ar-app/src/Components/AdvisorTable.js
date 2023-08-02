import React, { useState }  from "react";
import "../Styles/AdvisorTableStyles.css";
import "../Styles/Tickbox.css";
import "../Styles/PopupStyles.css";
import Popup from "./Popup";
import EditAdvisor from "./EditAdvisorButton";
import axios from "axios";

function AdvisorTable({list, colNames, width = 'auto', height = 'auto'}) {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [advisorHistory, setAdvisorHistory] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    const handleRowClick = (rowData, index) => {
        setSelectedRow(rowData);
        setShowPopup(true);

        const regNo = rowData.RegNo;
        
        axios.post("http://localhost:3300/advisorHistory", {
        RegNo: regNo
        })
        .then((response) => {
        // Handle the response here, set it to state or perform any other actions
        console.log("Additional information:", response.data);
        setAdvisorHistory(response.data);
        })
        .catch((error) => {
        console.error("Error getting additional information:", error);
        });
    };

    const handleCheckboxChange = () => {
        setIsChecked((prevChecked) => !prevChecked);
      };
    
      const handleEditAdvisor = () => {
        if (setIsChecked) {
          setShowPopup(true);
        }
      };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedRow(null);
        setAdvisorHistory(null);
    };

    return (
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
                                    <input type="checkbox" 
                                            checked={isChecked} 
                                            onChange={handleCheckboxChange}/>
                                    <span className="checkbox"></span>
                                </label>
                                </td>
                                {Object.values(obj).map((value,index2) => (
                                    <td key={index2} onClick={() => handleRowClick(value,index2)} >
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <EditAdvisor Button onClick={handleEditAdvisor} />
            {showPopup && isChecked && (
                <div className="popup">
                <div className="popup-content">
                    <h2>Edit Advisor</h2>
                    <p>Enter the Advisor name :.......................</p>
                    <button className="close" onClick={closePopup}>X</button>
                </div>
                </div>
      )}
            {showPopup && selectedRow &&  (
                    <div className="popup">
                        <div className="popup-content">
                        <h2>Advisor History:</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Advisor</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {advisorHistory && advisorHistory.map((advisor, index) => (
                                    <tr key={index}>
                                        <td>{advisor.StaffName}</td>
                                        <td>{advisor.StartDate}</td>
                                        <td>{advisor.EndDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="close" onClick={closePopup}>X</button>
                        </div>
                    </div>
            )}

        </div>
    );
}

export default AdvisorTable;