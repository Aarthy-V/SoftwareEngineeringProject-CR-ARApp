import "../Styles/StudentStyle.css";
import SearchBar from "./SearchBar";
import NewStudentButton from "./NewStudentButton";
import DropDownYear from "./DropDownYear";
import React, { useState, useEffect } from "react";
import "../Styles/main.css";
import "../Styles/HomeStyles.css";
import "../Styles/NewSemesterStyles.css";
import "../Styles/ExtraFeatureButton.css";
import { Link, Route, Routes } from "react-router-dom";

import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import Table from "./Table2";
import { Icon1, Icon2, Icon3 } from "./MyIcon";
import ExtraFeatureButton from "./ExtraFeatureButton";
import MainHead from "./MainHead";

function Student() {
  const handleNewStudent = () => {
    // Handle the "New Student" button click event
    console.log("New Student button clicked");
  };
  
  const handleSearch = (searchTerm) => {
    // Perform search logic here using the searchTerm
    console.log("Search term:", searchTerm);
  };

  const handleExtra = (viewing) => {
    console.log('view:', viewing);
  }

  const [studentData, setStudentData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [advApprovedData, setAdvApprovedData] = useState([]);
  const [advName, setAdvName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/student")
      .then((res) => res.json())
      .then((data) => {
        setStudentData(data);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:3300/STcourse")
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:3300/AdvApproved")
      .then((res) => res.json())
      .then((data) => {
        setAdvApprovedData(data);
      })
      .catch((err) => console.log(err));

      fetch("http://localhost:3300/AdvName")
      .then((res) => res.json())
      .then((data) => {
        setAdvName(data);
      })
      .catch((err) => console.log(err));


  }, []);

  const createTableData = () => {
    const uniqueCourseCodes = [...new Set(advApprovedData.map((entry) => entry.CourseCode))];
    const miss =  courseData.filter((item) => !uniqueCourseCodes.includes(item));
    console.log('miss',miss);


    const tableData = [];
    const tableData2 =[];
    console.log('adv',advApprovedData);

    studentData.forEach((student) => {
      const rowData = {
        Registration_No: student.RegNo,
        Name: student.FullName,
      };

      uniqueCourseCodes.forEach((courseCode) => {
        const matchingEntry = advApprovedData.find(
          (entry) => entry.RegNo === student.RegNo && entry.CourseCode === courseCode
        );

        const advApprovedValue = matchingEntry ? matchingEntry.AdvApproved : 0;

        rowData[courseCode] = advApprovedValue === 1 ? <Icon1 /> : <Icon2 /> ;
      });

      miss.forEach((courseCode)=>{
        rowData[courseCode] =  <Icon2 />;
      });

      advName.forEach((adv)=>{
        if (student.RegNo === adv.RegNo){
          rowData['Advisor'] = adv.FullName;
        }
      })


     rowData['View'] = (
      <Link className="text-wrapper-3" to={`/viewProfile/${student.RegNo}`}>
      <Icon3 />
    </Link>
  );


      console.log('row data',rowData);
      tableData.push(rowData);
    });


    return tableData;
  };
  const table_data = createTableData();

const getTableColumns = () => {
    const courseCodes = courseData.map((course) => course.CourseCode);
    console.log('courseData',courseData);
    const colNames = ["Registration_No", "Name", ...courseData, "Advisor", "View"];


    // Remove any undefined or null values from the colNames array
    return colNames.filter((col) => col);
  };
  // Get the columns for the table
  const colNames = getTableColumns();

  console.log(colNames);
  console.log('count');


  return (
    <div>
      <div className="table-wrapper">
        <Table list={table_data} colNames={colNames} />
        <MainHead title="Students" searchTitle="Search Students..." isBtn="1" />
      </div>
    </div>
  );
};

export default Student;
