// ViewProfile.js
import "../Styles/ProfileViewStyles.css";
import PersonImage from "../Images/man.png";
import CoursesImage from "../Images/online-learning.png";
import BioImage from "../Images/bio.png";
import React, { useState, useEffect } from "react";
import axios from "axios";


// import React from 'react';
import { useParams } from 'react-router-dom';
const ProfileView = () => {
  const { RegNo } = useParams();

  useEffect(() => {
    if (RegNo) {
      submitRegNum();
    }
  }, [RegNo]);

  const submitRegNum = () => {
    axios.post("http://localhost:3300/studentProfileView", {
      RegNum: RegNo,
    })
    .then(() => {
    })
    .catch((error) => {
      console.error("Error submitting :", error);
    });
  };

  useEffect(() => {
    if (RegNo) {
      submitRegNum2();
    }
  }, [RegNo]);

  const submitRegNum2 = () => {
    axios.post("http://localhost:3300/studentCourseView", {
      RegNum2: RegNo,
    })
    .then(() => {
    })
    .catch((error) => {
      console.error("Error submitting :", error);
    });
  };

  useEffect(() => {
    if (RegNo) {
      submitRegNum3();
    }
  }, [RegNo]);

  const submitRegNum3 = () => {
    axios.post("http://localhost:3300/studentBioView", {
      RegNum3: RegNo,
    })
    .then(() => {
    })
    .catch((error) => {
      console.error("Error submitting :", error);
    });
  };

  const [studentData, setViewData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [BioData, setBioData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/view")
      .then((res) => res.json())
      .then((data) => {
        setViewData(data);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:3300/viewCourse")
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data);
      })
      .catch((err) => console.log(err));

      fetch("http://localhost:3300/viewBio")
      .then((res) => res.json())
      .then((data) => {
        setBioData(data[0]);
      })
      .catch((err) => console.log(err));


    }, []);

    

    const departmentMapping = {
      D001: "Com",
      D002: "Civil",
      D003: "EEE",
      D004: "Mech",
      D005: "IDS",
    };

    function formatDate(dateString) {
      if (!dateString) return ""; // Handle the case where dateString is empty or not available
      const dateObject = new Date(dateString);
      return dateObject.toLocaleDateString("en-GB"); // Adjust the locale as per your desired date format
    }

  // Now you have the RegNo parameter and can use it in your component logic
  return (
    <div className="body-wrapper">
      <div className="card">
        <div className="imgBx">
          <img src={PersonImage} />
        </div>
        <div className="content">
          <div className="details">
            <h2>
            {studentData.length > 0 && studentData[0].FullName}
              <br />
              <span>{RegNo}</span>
              </h2>
            <div className="data">
              <h5>
              {studentData[0]?.AcYr}
                <br />
                <span>AcYr</span>
              </h5>
              <h5>
              {studentData[0]?.Semester}
                <br />
                <span>Semester</span>
              </h5>
              <h5>
              {departmentMapping[studentData[0]?.DepID]}
                <br />
                <span>Department</span>
              </h5>
            </div>
            <div className="actionBtn">
              <button>Edit</button>
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-1">
        <div className="imgBx">
          <img src={CoursesImage} />
        </div>
        <div className="content-1">
          <div className="details-1">
            <div className="course-wrapper">
              <h2>Current Courses Taken</h2>
            </div>
            <div className="wrapper-3">
              <div className="course-wrapper-2">
                 {/* Iterate over the courseData and create dynamic course elements */}
                 {courseData.map((course, index) => (
                  <h4 key={index}>{course.CourseName}</h4>
                ))}
              </div>
              <div className="approved">
                {/* Iterate over the courseData and create dynamic approval status elements */}
                {courseData.map((course, index) => (
                  <label key={index} className={`rectangle-322 ${course.AdvApproved === 1 ? "approved" : "rectangle-322-red"}`}>
                    {course.AdvApproved === 1 ? "Approved" : "Pending"}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-2">
        <div className="imgBx">
          <img src={BioImage} />
        </div>
        <div className="content-2">
          <div className="details-2">
            <div className="biodata-wrapper">
              <h2>Bio Data</h2>
            </div>
            <div className="data-wrapper">
              <div className="label-wrapper">
                <label>Gender : </label>
                <label>Male</label>
              </div>
              <div className="label-wrapper">
              <label>Age : {BioData.age} </label>
               
              </div>
              <label>Date of Birth : {formatDate(BioData.DOB)} </label>
            
              <label>Telephone : {BioData.PhNo} </label>
              
              <label>Race : {BioData.Race}</label>
              <label>Religion : {BioData.Religion}</label>
             
              <label>NIC : {BioData.NIC} </label>
             
              <label>Address : </label>
              <label>{BioData.PermenantAddr}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 

export default ProfileView;
