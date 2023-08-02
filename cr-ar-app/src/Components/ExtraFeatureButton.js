import React from 'react';
import '../Styles/StudentStyle.css';
import '../Styles/DownloadButton.css';
import '../Styles/ExtraFeatureButton.css';

function ExtraFeatureButton({ onClick }) {
 
  return (
    <button className="estyle" onClick={onClick}>
      :
    </button>
  );
}

export default ExtraFeatureButton;