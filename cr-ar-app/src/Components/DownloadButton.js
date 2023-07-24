import React from 'react';
import '../Styles/StudentStyle.css';
import '../Styles/DownloadButton.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function DownloadCourses({ onClick }) {

  //const pdfRef = useRef();

 
  return (
    <button className="downstyle" onClick={onClick}>
      Download
    </button>
  );
}

export default DownloadCourses;