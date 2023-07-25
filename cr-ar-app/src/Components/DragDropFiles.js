
import "../Styles/DragDropFiles.css";
import Tickbox from './TickBox';
import React, { useState, useRef  } from "react";
import "../Styles/main.css"
import AdvisorTable from "./AdvisorTable";
import EditAdvisor from "./EditAdvisorButton";
import MainHead from "./MainHead";
import { Route, Routes, Link } from "react-router-dom";

const DragDropFiles = () => {
  const [files, Browse] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    Browse(event.dataTransfer.files)
  };
  
  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };


  
  return (
    <>
     <div >
    
        <MainHead title="Advisors" searchTitle="Search Advisors..." isBtn="0" />
        
       <div>
        <h2>upload</h2>
        
        <div className="body-wrapper">
            
        <div className="dropzone">
            <h0>upload</h0>
            
          <div 
            className="dropzone1"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          
          
          <input 
            type="file"
            multiple
            onChange={(event) => Browse(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          
          <button onClick={() => inputRef.current.click()}>Browse</button>
          <h1>Drag and Drop Files or Browse</h1>
          </div>
          <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{}</li> )}
        </ul>
        <div className="dropzone3">
            <button onClick={handleUpload}>Upload</button>
        </div>

          
          
        </div>
       </div>
        </div>
        </div>
        
      
       
    </>
  );
};

export default DragDropFiles;
