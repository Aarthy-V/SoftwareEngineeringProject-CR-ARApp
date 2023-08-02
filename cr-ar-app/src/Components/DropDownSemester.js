import React, { useState } from "react";
import "../Styles/DropDownStyles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function DropDownSemester() {
  const [isActive, setIsActive] = useState(false);

    return ( 
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
         Semester
        <FontAwesomeIcon icon={faCaretDown} className="icon" />
      </div>
      {isActive && (
      <div className="dropdown-content">
          <div className="dropdown-item">Semester 1</div>
          <div className="dropdown-item">Semester 2</div>
          <div className="dropdown-item">Semester 3</div>
      </div>
      )}
    </div>
    );
}

export default DropDownSemester;