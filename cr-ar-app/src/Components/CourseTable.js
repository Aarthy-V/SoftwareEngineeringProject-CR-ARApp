import React, { useState, useEffect, useRef } from 'react';
import "../Styles/StudentStyle.css";
import SearchBar from './SearchBar';
//import React, {useRef} from "react";
import html2pdf from 'html2pdf.js';
import { useReactToPrint } from 'react-to-print';



import DropDownYear from "./DropDownYear";

import "../Styles/main.css"
import "../Styles/HomeStyles.css";
import Table from "./Table";
import '../Styles/ExtraFeatureButton.css';
import MainHead from "./MainHead";
import '../Styles/DownloadButton.css';
import ReactDOM from 'react-dom';

import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import DownloadButton from "./DownloadButton";
import ExtraFeatureButton from "./ExtraFeatureButton";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
  
  function CourseTable() {

    const conponentPDF=useRef();
    const[userData, setUserdata]=useState([]);

    const generatePDF = useReactToPrint({
      content: () => conponentPDF.current,
      documentTitle: "Userdata",
      onAfterPrint: () => alert("Data saved in PDF"),
      pageStyle: `
        @page {
          size: 1920px 1080px; /* Set the desired page size (width x height) */
          margin: 0; /* Set margin to 0 to remove default page margins */
          transform: scale(0.5); /* Adjust the zoom level by changing the scale value */
        }
        @media print {
          body {
            margin: 0; /* Set margin to 0 to remove default body margins */
          }
        }
      `,
    });
  
    const pdfRef = useRef();

    // Function to handle the printing functionality
    const handlePrint = () => {
      const tableElement = pdfRef.current.querySelector('.table'); // Assuming the table has the 'table' class
      if (tableElement) {
        // Add CSS to style the table with borders
        const tableStyle = `
          <style>
          @media print {
            @page {
              size: 1920px 1080px; 
              margin: 20mm 10mm; /* Set the margins (top, right, bottom, left) for the print paper */
            }
          .table{
            display: block;
            border-collapse: collapse;
            overflow: hidden;
            table-layout: fixed;
            border-radius: 10px;
            white-space: nowrap;
            max-height: 710px;
            width: 100%;
            max-width: 100%;
            margin: auto;
            overflow-y: scroll;
            overflow-x: auto;
            filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.2));
            position: fixed;
            top: 40px;
        }
        .table thead{
          background-color: var(--white, #FFF);
          color: var(--gray, #69686A);
          position: sticky; /* Keep the header fixed */
          top: 0px; /* Position it at the top of the wrapper */
          z-index: 1;
        }

        .table tbody{
          background-color: var(--white, #FFF);
          color: var(--gray, #69686A);
        }

        .table th, 
        .table td{
          padding: 0.8rem;
        } 

        .table td{
          border-top: 0.5px solid #ddd;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .table tbody tr:hover{
          background-color: #F2F8FF;
          filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.2));
        }

        .expand{
          width: 16%;
        }
          </style>
        `;
    
        const content = tableStyle + tableElement.outerHTML;
        const printWindow = window.open('', '', 'height=500,width=800');
        printWindow.document.write('<html><head><title>Print</title></head><body>');
        printWindow.document.write(content);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      }
    };
    
  const handlePrint1 = () => {
    const tableElement = pdfRef.current.querySelector('.table');
    const content = tableElement.outerHTML;
    const opt = {
      margin: 10,
      filename: 'course_details.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(content).save();
    
  };
    
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
        <div ref={conponentPDF} style={{width:'100%'}}>      
        
        <Table list={Data} colNames={colNames}/>
        </div>
        <div>
        
        <MainHead title="Courses" searchTitle="Search Courses..." isBtn="0"/>
        </div>
       
        <div>
          <DownloadButton onClick={handlePrint} />
        </div>
        Course details
        
      </div>
    );
  };

  export default CourseTable;


       