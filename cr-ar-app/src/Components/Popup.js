import React from "react";
import "../Styles/PopupStyles.css"; 

const Popup = ({ showPopup, onClose }) => {
  return showPopup ? (
    <div className="popup">
      <div className="popup-content">
        <h2>Popup Content</h2>
        {/* Add your popup content here */}
        <button className="close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  ) : null;
};

export default Popup;