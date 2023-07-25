import React, { useState, useEffect, useRef } from 'react';
import "../Styles/StudentStyle.css";
import SearchBar from './SearchBar';
//import React, {useRef} from "react";

import DropDownYear from "./DropDownYear";

import "../Styles/main.css"
import "../Styles/HomeStyles.css";
import Table from "./Table";
import '../Styles/ExtraFeatureButton.css';
import MainHead from "./MainHead";
import '../Styles/DownloadButton.css';



import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import DownloadButton from "./DownloadButton";
import ExtraFeatureButton from "./ExtraFeatureButton";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


  
  function CourseTable() {

    const pdfRef = useRef();

  /*  const downloadPDF=()=>{
      const input = pdfRef.current;
      html2canvas(input).then((canvas)=>{
        const imgData=canvas.toDataURL('image/png');
        const pdf=new jsPDF('p','mm', 'a4', true);
        const pdfwidth=pdf.internal.pageSize.getWidth();
        const pdfHeight=pdf.internal.pageSize.getHeight();
        const imgWidth=canvas.width;
        const imgHeight=canvas.height;
        const ratio=Math.min(pdfwidth/imgWidth, pdfHeight/imgHeight);
        const imgX=(pdfwidth-imgWidth*ratio)/2;
        const imgY=30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
        pdf.save('invoice.pdf');
      });
    };*/
    
    const handleSearch = (searchTerm) => {
      // Perform search logic here using the searchTerm
      console.log('Search term:', searchTerm);
    };
    const handledownload = async() => {
      // Perform search logic here using the searchTerm
      //console.log('Download:', Term);
      const input = pdfRef.current;
      html2canvas(input).then((canvas)=>{
        const imgData=canvas.toDataURL('image/png');
        const pdf=new jsPDF('p','mm', 'a4', true);
        const pdfwidth=pdf.internal.pageSize.getWidth();
        const pdfHeight=pdf.internal.pageSize.getHeight();
        const imgWidth=canvas.width;
        const imgHeight=canvas.height;
        const ratio=Math.min(pdfwidth/imgWidth, pdfHeight/imgHeight);
        const imgX=(pdfwidth-imgWidth*ratio)/2;
        const imgY=30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
        pdf.save('Course Details.pdf');
      });
    };
    
    const handleExtra = (viewing) =>{
      console.log('view:', viewing);
    }
    /*const list = [
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"}
  ];*/
  
  const colNames = ['Course Code','Course Name','Credit','Core/Technical','Coordinator','Prerequiste','Offered Dept Name','Sem start Date', 'Sem End Date'];
    
  
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/CHupdated")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  

    return (
      
      <div ref={pdfRef}>
        
        <div>
        <Table list={Data} colNames={colNames}/>
        
        <MainHead title="Courses" searchTitle="Search Courses..." isBtn="0"/>
        </div>
       
        <div>
          <DownloadButton onClick={handledownload} />
        </div>
        Course details
      </div>
           
    );
  };
  
  export default CourseTable;
/*
 <div className='downstyle'>
          <button className="btn btn-primary" onClick={downloadPDF}>Download PDF</button>
        </div>*/

       