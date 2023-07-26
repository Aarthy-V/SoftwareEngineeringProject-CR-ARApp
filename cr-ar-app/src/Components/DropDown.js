import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "../Styles/DDStyles.css";
import axios from "axios";

function DropDown({ year, semester, department }) {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  const options2 = [
    { value: "1", label: "Semester 1" },
    { value: "2", label: "Semester 2" },
    { value: "3", label: "Semester 3" },
    { value: "4", label: "Semester 4" },
    { value: "5", label: "Semester 5" },
    { value: "6", label: "Semester 6" },
    { value: "7", label: "Semester 7" },
    { value: "8", label: "Semester 8" },
  ];

  const options3 = [
    { value: "D001", label: "Computer Engineering" },
    {
      value: "D002",
      label: "Civil and Environmental Engineering",
    },
    {
      value: "D003",
      label: "Electrical and Electronic Engineering",
    },
    { value: "D004", label: "Mechanical Engineering" },
    { value: "D005", label: "Inter Disciplinary Studies" },
  ];

  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/academicYear")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const values = options.map((opts, i) => ({
    value: opts.AcYr,
    label: opts.AcYr,
  }));

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

  year = value1;
  semester = value2;
  department = value3;

  console.log("Year", year);
  console.log("Semester", semester);
  console.log("Department", department);

  useEffect(() => {
    if (value1 && value2 && value3) {
      submitReview();
    }
  }, [value1, value2, value3]);

  const submitReview = () => {
    axios.post("http://localhost:3300/coursesUpdated", {
      AcYr: value1.value,
      OfferedSem: value2.value,
      OfferedDeptID: value3.value,
    })
    .then(() => {
    })
    .catch((error) => {
      console.error("Error submitting review:", error);
    });
  };

  return (
    <div className="dd-wrapper">
      <Select
        components={makeAnimated}
        options={values}
        defaultValue={value1}
        placeholder="Select the Academic Year"
        onChange={setValue1}
        isSearchable
        className="mb-3"
        theme={customTheme}
      />
      <Select
        components={makeAnimated}
        options={options2}
        defaultValue={value2}
        placeholder="Select the Semester"
        onChange={setValue2}
        isSearchable
        className="mb-3"
        theme={customTheme}
      />
      <Select
        components={makeAnimated}
        options={options3}
        defaultValue={value3}
        placeholder="Select the Department"
        onChange={setValue3}
        isSearchable
        className="mb-3"
        theme={customTheme}
      />
    </div>
  );
}

export default DropDown;

