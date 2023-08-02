import React from "react";
import { useState } from "react";
import MainHead from "./MainHead";
import "../Styles/ResultStyle.css";
import {MdCloudUpload, MdDelete} from 'react-icons/md'; 
import {AiFillFileImage} from 'react-icons/ai';
import axios from "axios";
import * as XLSX from "xlsx";

function StudentExcelUpload() {
    
    const [file, setFile] = useState("No selected file")

    const [image, setImage] = useState(null);

    // Function to handle file upload and database operation
    const handleFileUpload = async (file) => {
        try {
        const formData = new FormData();
        formData.append("excelFile", file);

        // Make an API request to the backend
        const response = await axios.post("/api/upload", formData);

        // Handle the response from the backend (you can show a success message or handle errors)
        console.log(response.data);
        } catch (error) {
        console.error("Error uploading file:", error);
        }
    };

    return (
        <div className="center-container">
            <main>
            <h2>Upload Excel sheet here</h2>
            <form 
            onClick={()=> document.querySelector(".input-field").click()}
            >
                <input type="file" accept=".xls, .xlsx" className="input-field" hidden
                onChange={({target:{files}})=>{
                    files[0] && setFile(files[0].name)
                    if(files){
                        setImage(URL.createObjectURL (files[0]))
                        handleFileUpload(files[0]);
                    } 
                }}
                
                />


                {image ?
                    <img src={image} width={60} height={60} alt={file} />  
                    :
                    <>
                    <MdCloudUpload color="#1475cf" size={60}/>
                    <p>Browse Files to upload</p>
                    </>
                     
                }
              
            </form>
            <section className="uploaded-row">
               <AiFillFileImage color="#009687"/>
               <span className="upload-content">
                    {file} -
                    <MdDelete
                    onClick={()=>{
                        setFile("No selected file")
                        setImage(null);
                    }}
                    />
                </span> 
            </section> 
            </main>   
        </div>
    )
}
export default StudentExcelUpload;