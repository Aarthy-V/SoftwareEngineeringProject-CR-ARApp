import "../Styles/AdvisorStyle.css";
import "../Styles/AdvisorTableStyles.css";
import SearchBar from './SearchBar';
import DropDownYear from "./DropDownYear";
import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import Tickbox from './TickBox';
import React, { useState } from 'react';
import "../Styles/main.css"
import AdvisorTable from "./AdvisorTable";
import EditAdvisor from "./EditAdvisorButton";
import MainHead from "./MainHead";

function advisor(){

    const handleEditAdvisor = () => {
        // Handle the "Edit Advisor" button click event
        console.log('Edit Advisor button clicked');
      };
    const handleSearch = (searchTerm) => {
        // Perform search logic here using the searchTerm
        console.log('Search term:', searchTerm);
      };

    const list = [
      {
        REG_NUMBER: "2019/E/001",
        NAME: "Aarthy V",
        ADVISOR: "Dr. Kaneshwaran",
      },
      {
        REG_NUMBER: "2019/E/002",
        NAME: "Aasifa M.J.F",
        ADVISOR: "Prof. Atputharajah",
      },
      {
        REG_NUMBER: "2019/E/032",
        NAME: "Dilushan G",
        ADVISOR: "Dr. Kaneshwaran",
      },
      {
        REG_NUMBER: "2019/E/039",
        NAME: "Gowsikan N",
        ADVISOR: "Dr. Jaracharan",
      },
      {
        REG_NUMBER: "2019/E/049",
        NAME: "Jathurshan S",
        ADVISOR: "Dr. Jaracharan",
      },
      {
        REG_NUMBER: "2019/E/033",
        NAME: "Diluxshana M",
        ADVISOR: "Dr. Jaracharan",
      },
      {
        REG_NUMBER: "2019/E/114",
        NAME: "Riza M.S.I",
        ADVISOR: "Dr. Jayananthan",
      },
      {
        REG_NUMBER: "2019/E/132",
        NAME: "Senthooran S",
        ADVISOR: "Dr. Jayananthan",
      },
      {
        REG_NUMBER: "2019/E/088",
        NAME: "Nuska N.F",
        ADVISOR: "Prof. Atputharajah",
      },
      {
        REG_NUMBER: "2019/E/011",
        NAME: "Ashfa A.G.F",
        ADVISOR: "Dr. Kaneshwaran",
      },
      {
        REG_NUMBER: "2019/E/033",
        NAME: "Diluxshana M",
        ADVISOR: "Dr. Jaracharan",
      },
      {
        REG_NUMBER: "2019/E/114",
        NAME: "Riza M.S.I",
        ADVISOR: "Dr. Jayananthan",
      },
      {
        REG_NUMBER: "2019/E/132",
        NAME: "Senthooran S",
        ADVISOR: "Dr. Jayananthan",
      },
      {
        REG_NUMBER: "2019/E/088",
        NAME: "Nuska N.F",
        ADVISOR: "Prof. Atputharajah",
      },
      {
        REG_NUMBER: "2019/E/011",
        NAME: "Ashfa A.G.F",
        ADVISOR: "Dr. Kaneshwaran",
      },
      ,
      {
        REG_NUMBER: "2019/E/033",
        NAME: "Diluxshana M",
        ADVISOR: "Dr. Jaracharan",
      },
      {
        REG_NUMBER: "2019/E/114",
        NAME: "Riza M.S.I",
        ADVISOR: "Dr. Jayananthan",
      },
      {
        REG_NUMBER: "2019/E/132",
        NAME: "Senthooran S",
        ADVISOR: "Dr. Jayananthan",
      },
      {
        REG_NUMBER: "2019/E/088",
        NAME: "Nuska N.F",
        ADVISOR: "Prof. Atputharajah",
      },
      {
        REG_NUMBER: "2019/E/011",
        NAME: "Ashfa A.G.F",
        ADVISOR: "Dr. Kaneshwaran",
      },
    ];

      const colNames = [' ','REG_NUMBER','NAME','ADVISOR'];

    return (
      <div>
        <MainHead title="Advisors" searchTitle="Search Advisors..." isBtn="0" />
          <AdvisorTable list={list} colNames={colNames} />
          <div>
            <EditAdvisor Button onClick={handleEditAdvisor} />
          </div>
        
      </div>
    );
}
export default advisor;
