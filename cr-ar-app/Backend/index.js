var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.json());
var db = require("./database");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/courses",(req, res) => {
  console.log("newsem course table");
  let sql = "SELECT * FROM course";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
// course history
app.get("/courseTable",(req, res)=>{
  console.log("course table view");
  let sql="SELECT * FROM course_history";
  db.query(sql,(err, results) =>{
    if(err) return res.json(err);
    return res.json(results);
  });
});




app.get("/academicYear", (req, res) => {
  console.log("Academic Year Got");
  let sql = "SELECT DISTINCT AcYr FROM student_university_details";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});

// New semester course details
let updated = "Hi";
let AcYr = "";
let OfferedSem = "";
let OfferedDeptID = "";

app.post("/coursesUpdated", (req, res) => {
  AcYr = req.body.AcYr;
  OfferedSem = req.body.OfferedSem;
  OfferedDeptID = req.body.OfferedDeptID;
  const sql =
  "SELECT * FROM course WHERE AcYr = ? and OfferedSem = ? and OfferedDeptID = ?";
;
  db.query(sql, [AcYr, OfferedSem, OfferedDeptID], (err, result) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("Courses table updated successfully");
    console.log("Result:", result);

    // Send the result as a response to the client
    updated = result;
    return res.status(200).json(result);
  });
});

app.get("/updated", (req, res) => {
    return res.json(updated);
});

app.listen(3300, function () {
  console.log("App Listening on port 3300");
  db.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected");
  });
});

// course offered history
let updated1 = "";

app.get("/CHupdated", (req, res) => {
  const sql =
  //"SELECT * FROM course_history WHERE AcYr = ? and OfferedSem = ? and OfferedDeptID = ?";
  "SELECT ch.`CourseCode`,ch.`CourseName`,ch.`Credit`,ch.`Core/Technical`,s.`FullName`,ch.`PreRequesite`,ch.`OfferedSem`,d.`DepName`,ch.`AcYr`,ch.`SemStartDate`,ch.`SemEndDate`,d.`DepName` FROM course_history AS ch JOIN department AS d ON ch.`OfferedDeptID` = d.`DepID` JOIN academicstaff AS s ON ch.`CoordinatorID` = s.`StaffID` WHERE AcYr = ? and OfferedSem = ? and OfferedDeptID = ?" ;
  db.query(sql, [AcYr, OfferedSem, OfferedDeptID], (err, result1) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("Courses history table updated successfully");
    console.log("Result:", result1);

    // Send the result as a response to the client
    updated1 = result1;
    return res.status(200).json(result1);
  });
});

//student details 
let updated3 = "";

app.get("/student", (req, res) => {
  const sql = `
    SELECT sud.RegNo, sr.FullName
    FROM student_university_details AS sud
    JOIN student_registration AS sr ON sud.RegNo = sr.RegNo
    WHERE sud.AcYr = ? AND sud.Semester = ? AND sud.DepID = ?
  `;

  db.query(sql, [AcYr, OfferedSem, OfferedDeptID], (err, result3) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("Data retrieved successfully");
    console.log("Result:", result3);

    // Send the result as a response to the client
    return res.status(200).json(result3);
  });
});


// student table course column
let updated2 = ""; // Declare the updated2 variable as an empty array

app.get("/STcourse", (req, res) => {
  const sql = " SELECT CourseCode FROM course_history WHERE AcYr = ? AND OfferedSem = ? AND OfferedDeptID = ? ";

  db.query(sql, [AcYr, OfferedSem, OfferedDeptID], (err, result2) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("Student table updated successfully");
    console.log("Result:", result2);

    // Extracting the CourseCode values from the result
    const courseCodes = result2.map((item) => item.CourseCode);

    // Storing the CourseCode values in the "updated2" variable
    updated2 = courseCodes;

    // Send the result as a response to the client
    return res.status(200).json(courseCodes);
  });
  
});

//Adv approval

let updated4 = "";

app.get("/AdvApproved", (req, res) => {
  const sql = `
    SELECT  cr.AdvApproved
    FROM student_university_details AS sud
    JOIN student_registration AS sr ON sud.RegNo = sr.RegNo
    LEFT JOIN coursereg AS cr ON sr.RegNo = cr.RegNo
    WHERE sud.AcYr = ? AND sud.Semester = ? AND sud.DepID = ?
  `;

  db.query(sql, [AcYr, OfferedSem, OfferedDeptID], (err, result4) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("AdvApproved retrieved successfully");
    console.log("Result:", result4);

    // Send the result as a response to the client
    return res.status(200).json(result4);
  });
});

const multer = require("multer"); // For handling file uploads
const XLSX = require("xlsx"); // For reading Excel files

// Set up multer for file uploads
const upload = multer({ dest: "upload/" });
// API endpoint for file upload
app.post("/api/upload", upload.single("excelFile"), (req, res) => {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    // Read the uploaded file using XLSX library (install it using `npm install xlsx`)
    const workbook = XLSX.readFile(req.file.path);
    // Get the first sheet from the workbook
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    // Convert the sheet data into an array of objects
    const data = XLSX.utils.sheet_to_json(worksheet);

      const sql = "INSERT INTO student_sample (name, age) VALUES ?";
      db.query(sql, [data.map(({ name, age }) => [name, age])], (err, result) => {
        if (err) {
          console.error("Error inserting data into the database:", err);
          return res.status(500).json({ error: "Internal server error" });
        }
        console.log("Data inserted into the database:", result);
        // Send a success response to the frontend
        res.status(200).json({ message: "File uploaded and data inserted into the database" });
      });
    });





