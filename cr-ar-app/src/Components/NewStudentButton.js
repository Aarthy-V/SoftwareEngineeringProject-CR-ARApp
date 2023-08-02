import React from 'react';
import '../Styles/StudentStyle.css';

function NewStudentButton({ onClick }) {
  return (
    <button className="new-student-button" onClick={onClick}>
      +
      New Student
    </button>
  );
}

export default NewStudentButton;
