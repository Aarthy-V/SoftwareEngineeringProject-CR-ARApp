import React from "react";
import { useState } from "react";
import MainHead from "./MainHead";
import "../Styles/ResultStyle.css";


function ResultUpload(){
    const [file, setFile]=useState()

    function handleFile(event){
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }
    function handleUpload(){
        const formData = new FormData()
        formData.append('file',file)
        fetch(
            'url',
            {
                method: "POST",
                body: formData
            }
        ).then((response)=>response.json())
        .then(
            (result)=>{
                console.log('success', result)
            }
        )
        .catch(error=>{
            console.error("Error:", error)
        })
    }

    return(

        <div>
            <MainHead title="Upload a file"/>

            <h2>Upload a file</h2>
            <form onSubmit={handleUpload}>
                <input type="file" name="file" onChange={handleFile}/>
                <button>Upload</button>
            </form>
        </div>
    )
}
export default ResultUpload;