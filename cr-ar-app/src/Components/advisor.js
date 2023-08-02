import "../Styles/AdvisorStyle.css";
import "../Styles/AdvisorTableStyles.css";
import SearchBar from './SearchBar';
import DropDownYear from "./DropDownYear";
import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import Tickbox from './TickBox';
import React, { useState, useEffect } from "react";
import "../Styles/main.css"
import AdvisorTable from "./AdvisorTable";
import EditAdvisor from "./EditAdvisorButton";
import MainHead from "./MainHead";

function Advisor(){

  const [AdvisorData, setAdvisorData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/advisor")
      .then((res) => res.json())
      .then((data) => {
        setAdvisorData(data);
      })
      .catch((err) => console.log(err));
    }, []);

    const handleSearch = (searchTerm) => {
        // Perform search logic here using the searchTerm
        console.log('Search term:', searchTerm);
      };

      const colNames = [' ','REG_NUMBER','ADVISOR'];


    return (
      <div>
        <MainHead title="Advisors" searchTitle="Search Advisors..." isBtn="0" />
          <AdvisorTable list={AdvisorData} colNames={colNames} />
          <div>
          
          </div>
        
      </div>
    );
}
export default Advisor;
