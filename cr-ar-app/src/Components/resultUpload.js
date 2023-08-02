import React from "react";
import { useState } from "react";
import MainHead from "./MainHead";
import "../Styles/ResultStyle.css";
import {MdCloudUpload, MdDelete} from 'react-icons/md'; 
import {AiFillFileImage} from 'react-icons/ai';

function ResultUpload() {
    
    const [file, setFile] = useState("No selected file")

    /*function handleFile(event) {
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
    }*/
    const [image, setImage] = useState(null);

    return (
        <div className="center-container">
            <main>
            <h2>Upload the result</h2>
            <form 
            onClick={()=> document.querySelector(".input-field").click()}
            >
                <input type="file" accept=".pdf, image/*" className="input-field" hidden
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
export default ResultUpload;