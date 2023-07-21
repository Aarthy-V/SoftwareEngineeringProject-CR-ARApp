import "../Styles/NewSemesterStyles.css";
import SearchBar from "./SearchBar";
import NewStudentButton from "./NewStudentButton";
import DropDownYear from "./DropDownYear";
import React, { useState, useEffect } from "react";
import "../Styles/main.css";
import "../Styles/HomeStyles.css";

import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import Table from "./Table";
import MainHead from "./MainHead";
import Modal from "./Modal";
import DropDown from "./DropDown";

function NewSemester() {
  const [modalOpen, setModalOpen] = useState(false);

  const colNames = [
    "Code",
    "Course",
    "Credit",
    "Core/Technical",
    "CoordinatorID",
    "Prerequiste",
    "Status",
  ];

  

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/updated")
      .then((res) => res.json())
      .then((data) => {
        // Extracting only the first 5 columns and the last column from each row of data
        const extractedData = data.map((row) => {
          const keys = Object.keys(row);
          const extractedRow = {
            ...keys.slice(0, 6).reduce((obj, key) => {
              obj[key] = row[key];
              return obj;
            }, {}),
            [keys[keys.length - 1]]: row[keys[keys.length - 1]],
          };
          return extractedRow;
        });
        setData(extractedData);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (targetIndex) => {
    console.log("Button Clicked");
    setData((prevData) => prevData.filter((_, idx) => idx !== targetIndex));
  };


  return (
    <>
      <div className="title-wrapper">
          <p className="title-wrapper-2">New Semester</p>
      </div>
      <div className="table-wrapper">
        {data.length > 0 && (
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
              {Object.values(data).map((obj, index) => (
                <tr className="expand" key={index}>
                  {Object.values(obj).map((value, index2) => (
                    <td key={index2}>
                      {index2 === 3 && value === "Core" ? (
                        <button className="label-core">{value}</button>
                      ) : index2 === 3 && value === "Technical" ? (
                        <button className="label-technical">{value}</button>
                      ) : index2 === 6 ? (
                        <button className="label-remove" onClick={() => handleRemove(index)}>Remove</button>
                      ) : (
                        <span>{value}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="button-button-wrapper">
        <div className="button-wrapper">
          <div className="button-h1">
            <button className="button-open-semester">Open Semester</button>
          </div>
        </div>
      </div>
      <div className="button-button-wrapper-1">
        <div className="button-wrapper-1">
          <div className="button-h2">
            <button
              className="button-new-course"
              onClick={() => setModalOpen(true)}
            >
              Add New Course
            </button>
            {modalOpen && <Modal />}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSemester;
