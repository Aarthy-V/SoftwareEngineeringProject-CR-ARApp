import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "../Styles/DDStyles.css";
import axios from "axios";

function DropDown1() {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [options3, setOptions3] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3300/academicYear")
      .then((res) => res.json())
      .then((data) => {
        setOptions1(
          data.map((item) => ({
            value: item.AcYr,
            label: item.AcYr,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);



  useEffect(() => {
    if (value1) {
      // Fetch and set the options for Semester based on the selected Academic Year
      fetch(`http://localhost:3300/semesters/${value1.value}`)
        .then((res) => res.json())
        .then((data) => {
          // Assuming the response is an array of objects with value and label fields
          //setValue2(null); // Reset the selected value for Semester
          setOptions2(
            data.map((item) => ({
                value: item.semester,
                label: item.semester,
              }))
          );
        })
        .catch((err) => console.log(err));

      // Fetch and set the options for Department based on the selected Academic Year
      fetch(`http://localhost:3300/departments/${value1.value}`)
        .then((res) => res.json())
        .then((data) => {
          // Assuming the response is an array of objects with value and label fields
          //setValue3(null); // Reset the selected value for Department
          setOptions3(
            data.map((item) => ({
                value: item.DepName,
                label: item.DepName,
              }))
          );
        })
        .catch((err) => console.log(err));
    }
  }, [value1]);

  useEffect(() => {
    if (value1 && value2 && value3) {
      submitReview();
    }
  }, [value1, value2, value3]);

  const submitReview = () => {
    axios
      .post("http://localhost:3300/coursesUpdated", {
        AcYr: value1.value,
        OfferedSem: value2.value,
        OfferedDeptID: value3.value,
      })
      .then(() => {})
      .catch((error) => {
        console.error("Error submitting review:", error);
      });
  };


  function customTheme(theme) {
    return {
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "#009687",
          primary: "green",
        },
      };
  }

  return (
    <div className="dd-wrapper">
      <Select
        components={makeAnimated}
        options={options1}
        value={value1}
        placeholder="Select the Academic Year"
        onChange={setValue1}
        isSearchable
        className="mb-3"
        theme={customTheme}
      />
      <Select
        components={makeAnimated}
        options={options2}
        value={value2}
        placeholder="Select the Semester"
        onChange={setValue2}
        isSearchable
        className="mb-3"
        theme={customTheme}
        isDisabled={!value1} // Disable Semester dropdown until Academic Year is selected
      />
      <Select
        components={makeAnimated}
        options={options3}
        value={value3}
        placeholder="Select the Department"
        onChange={setValue3}
        isSearchable
        className="mb-3"
        theme={customTheme}
        isDisabled={!value1} // Disable Department dropdown until Academic Year is selected
      />
    </div>
  );
}

export default DropDown1;
