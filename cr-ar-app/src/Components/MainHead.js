import "../Styles/MainHead.css";
import SearchBar from "./SearchBar";
import NewStudentButton from "./NewStudentButton";
import { FiPlus } from "react-icons/fi";
import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import DropDownYear from "./DropDownYear";
import DropDown from "./DropDown";
import { Link, Route, Routes } from "react-router-dom";
import StudentRegister from "./StudentRegister";

function MainHead({title,searchTitle,isBtn}) {
    const handleSearch = (searchTerm) => {
        // Perform search logic here using the searchTerm
        console.log('Search term:', searchTerm);
      };

      const handleNewStudent = () => {
        // Handle the "New Student" button click event
        console.log('New Student button clicked');
      };

  return (
    <>
      <div className="search-bar-search-bar">
        <div className="search-bar-frame-5077x">
          <p className="search-bar-students">{title}</p>
        </div>
        <div className="search-bar-search-search_box">
          <SearchBar onSearch={handleSearch} name={searchTitle} />
        </div>

        <div className="search-bar-button">
          {isBtn == 1 && (
            <div className="search-bar-frame">
              <div className="box">
                <div className="rectangle-wrapper">
                  <button className="rectangle" onClick={handleNewStudent}>
                    <FiPlus className="plus-icon" />
                    <Link className="text-wrapper-3" to="/studentRegister">
                      New Student
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MainHead;