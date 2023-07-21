import React from "react";
import { useState } from "react";
import MainHead from "./MainHead";
import "../Styles/ResultStyle.css";
import {MdCloudUpload, MdDelete} from 'react-icons/md'; 
import {AiFillFileImage} from 'react-icons/ai';

function StudentExcelUpload() {
    
    const [file, setFile] = useState("No selected file")

    const [image, setImage] = useState(null);

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
                        setImage(URL.createObjectURL(files[0]))
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
               <AiFillFileImage color="#1475cf"/>
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