import React from "react";
import "./Styles/main.css";
import NavBar from "./Components/NavBar";
import Advisor from "./Components/advisor";
import Home from "./Components/Home";


//import CourseTable from "./Components/CourseTable";
import Student from "./Components/Student";
import AddStudent from "./Components/AddStudent";
import Table from "./Components/Table";
import CourseTable from "./Components/CourseTable";
import NewSemester from "./Components/NewSemester";
import Modal from "./Components/Modal";

import { Route,Routes } from "react-router-dom";
import DropDown from "./Components/DropDown";
import MainHead from "./Components/MainHead";
import SecondaryHome from "./Components/SecondaryHome";
import MHome from "./Components/MHome";
import { useLocation } from "react-router-dom";
import "./App.css";
import StudentRegister from "./Components/StudentRegister";


function App() {
  const location = useLocation();
  const { pathname } = location;

  const isHome = pathname === "/";
  const isRegistration = pathname === "/studentRegister";

  return (
    <>
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/students" element={<Student />}></Route>
        <Route path="/courses" element={<CourseTable />}></Route>
        <Route path="/advisors" element={<Advisor />}></Route>
        <Route path="/newsemester" element={<NewSemester />}></Route>
        <Route path="/studentRegister" element={<StudentRegister />}></Route>
      </Routes>
      {(!isHome && !isRegistration) && <SecondaryHome />}
      
    </>
  );
}

export default App;
