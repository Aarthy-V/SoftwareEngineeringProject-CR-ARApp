import React, { useState } from "react";
import "../Styles/DropDownStyles.css";

function DropDownYear() {
  const [isActive, setIsActive] = useState(false);

    return ( 
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
        Choose Academic Year
      </div>
      {isActive && (
      <div className="dropdown-content">
          <div className="dropdown-item">2018/2019</div>
          <div className="dropdown-item">2019/2020</div>
          <div className="dropdown-item">2020/2021</div>
      </div>
      )}
    </div>
    );
}

export default DropDownYear;