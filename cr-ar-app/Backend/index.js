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

app.get("/courseTable",(req, res)=>{
  console.log("course table view");
  let sql="SELECT * FROM course_history";
  db.query(sql,(err, results) =>{
    if(err) return res.json(err);
    return res.json(results);
  });
});

app.get("/student", (req, res) => {
  console.log("student table view");
  let sql = "SELECT DISTINCT RegNo FROM student_cr_history";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);

    const distinctRegNos = results.map((row) => row.RegNo);

    let filledResults = [];
    distinctRegNos.forEach((regNo) => {
      let fullNameSql = "SELECT FullName FROM student_registration WHERE RegNo = ?";
      db.query(fullNameSql, regNo, (err, fullNameResult) => {
        if (err) return res.json(err);

        filledResults.push({
          RegNo: regNo,
          FullName: fullNameResult[0].FullName,
          // Assuming other columns in the front-end should be empty
          Column2: "",
          Column3: "",
          // Add more columns if needed
        });

        if (filledResults.length === distinctRegNos.length) {
          return res.json(filledResults);
        }
      });
    });
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

let updated = "Hi";

app.post("/coursesUpdated", (req, res) => {
  const AcYr = req.body.AcYr;
  const OfferedSem = req.body.OfferedSem;
  const OfferedDeptID = req.body.OfferedDeptID;
  const sql =
    "SELECT * FROM course WHERE AcYr = ? and OfferedSem = ? and OfferedDeptID = ?";
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

