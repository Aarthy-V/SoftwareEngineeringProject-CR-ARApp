import React, { useState } from "react";
import axios from "axios";
import "../Styles/StudentRegisterStyles.css";

function StudentRegister() {
  const [formData, setFormData] = useState({
    email: "",
    indexNo: "",
    nic: "",
    fname: "",
    lname: "",
    mathematics: "",
    physics: "",
    chemistry: "",
    english: "",
    phno: "",
    dob: "",
    zscore: "",
    rank: "",
    address: "",
    medium: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending data to backend:", formData);
  
    // Replace 'http://localhost:3300/studentBio' with the actual URL of your backend API
    //const backendApiUrl = "http://localhost:3300/studentBio";
  
    axios.post("http://localhost:3300/studentBio", formData)
      .then((response) => {
        console.log("Data saved to backend:", response.data);
        // You can handle any additional logic or show success messages here
      })
      .catch((error) => {
        console.error("Error saving data to backend:", error);
        console.error("Error Response Data:", error.response.data);
        // Handle errors and show error messages if necessary
      });
  };
  

  return ( 
    <>
    <div className="stdreg-container">
        <div className="stdreg">
            <form onSubmit={handleSubmit}>
                <div className="grid1">
                    <div className="form-group-1">
                        <label htmlFor="email">Email</label>
                        <input name="email" placeholder="Example@gmail.com" value={formData.email} onChange={handleChange} />
                    </div>
                    <div  className="form-group-1">
                        <label htmlFor="indexNo">A/L Index No</label>
                        <input name="indexNo" placeholder="Index Number" value={formData.indexNo} onChange={handleChange}/>
                    </div>
                    <div className="form-group-1">
                        <label htmlFor="nic">NIC</label>
                        <input name="nic" placeholder="NIC" value={formData.nic} onChange={handleChange}/>
                    </div>
                </div>

                <div className="grid1">
                    <div className="form-group-1">
                        <label htmlFor="fname">First Name</label>
                        <input name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange}/>
                    </div>
                    <div  className="form-group-1">
                        <label htmlFor="lname">Last Name</label>
                        <input name="lname" placeholder="Last name" value={formData.lname} onChange={handleChange}/>
                    </div>
                    <div className="form-group-1">
                        <label htmlFor="al-result1">A/L Results</label>
                        <div className="grid2">
                            <input  name="mathematics" placeholder="Mathamatics" value={formData.mathematics} onChange={handleChange}/>
                            <input className="input-wrapper"name="physics" placeholder="Physics" value={formData.physics} onChange={handleChange}/>
                            <input className="input-wrapper" name="chemistry" placeholder="Chemistry" value={formData.chemistry} onChange={handleChange}/>
                            <input className="input-wrapper" name="english" placeholder="Ad-English" value={formData.english} onChange={handleChange}/>
                        </div>
                    </div>
                </div>

                <div className="grid1">
                    <div className="form-group">
                        <label htmlFor="phno">Phone Number</label>
                        <input name="phno" placeholder="+94 771234567" value={formData.phno} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input name="dob" placeholder="00/00/0000" value={formData.dob} onChange={handleChange}/>
                    </div>
                    <div  className="form-group">
                        <label htmlFor="zscore">Z-Score</label>
                        <input name="zscore" placeholder="Z-Score" value={formData.zscore} onChange={handleChange}/>
                    </div>
                    <div  className="form-group">
                        <label htmlFor="rank">District Rank</label>
                        <input name="rank" placeholder="District Rank" value={formData.rank} onChange={handleChange}/>
                    </div>
                </div>

                <div className="grid1">
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="medium">Medium</label>
                        <input name="medium" placeholder="Medium" value={formData.medium} onChange={handleChange}/>
                    </div>
                </div>
                <button type="submit" className="btn">
                    REGISTER
                </button>
            </form>
        </div>
    </div>
    </>
 );
}

export default StudentRegister;