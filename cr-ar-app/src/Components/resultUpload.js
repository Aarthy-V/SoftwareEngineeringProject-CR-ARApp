import React from "react";
import { useState } from "react";
import MainHead from "./MainHead";
import "../Styles/ResultStyle.css";


function ResultUpload() {
    
    const [file, setFile] = useState()

    function handleFile(event) {
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }
    function handleUpload() {
        const formData = new FormData()
        formData.append('file', file)
        fetch(
            'url',
            {
                method: "POST",
                body: formData
            }
        ).then((response) => response.json())
            .then(
                (result) => {
                    console.log('success', result)
                }
            )
            .catch(error => {
                console.error("Error:", error)
            })
    }

    return (
        <div className="center-container">

            <h2>Upload the result</h2>
            <form onSubmit={handleUpload}>
                <input type="file" name="file" onChange={handleFile}/>
                <button>Upload</button>
            </form>
            <MainHead title="Courses" searchTitle="Search Courses..." isBtn="0"/>
        </div>
    )
}
export default ResultUpload;