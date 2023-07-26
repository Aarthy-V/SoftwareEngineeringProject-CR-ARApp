import "../Styles/ModalStyles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Modal({closeModal,onSubmit}) {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCodeChange = (e) => {
    setFormState({
      ...formState,
      courseCode: e.target.value,
    });
  };

  const handleNameChange = (e) => {
    setFormState({
      ...formState,
      courseName: e.target.value,
    });
  };

  const handleCreditChange = (e) => {
    setFormState({
      ...formState,
      credit: e.target.value,
    });
  };

  const handleCoreChange = (e) => {
    setFormState({
      ...formState,
      core: e.target.value,
    });
  };

  const handleCoordinatorChange = (e) => {
    setFormState({
      ...formState,
      coordinator: e.target.value,
    });
  };

  const handlePrequisteChange = (e) => {
    setFormState({
      ...formState,
      prequiste: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      onSubmit(formState);
      console.log(formState);
      closeModal();
    }
  }

  const [formState, setFormState] = useState({
    courseCode: "",
    courseName: "",
    credit: "",
    core: "Core",
    coordinator: "",
    prequiste: "",
    status: "0"
  });

  const [formErrors, setFormErrors] = useState({
    courseCode: "",
    courseName: "",
    credit: "",
    core: "",
    coordinator: "",
    prequiste: "",
  });

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate courseCode
    if (!formState.courseCode.trim()) {
      errors.courseCode = "Course Code is required";
      isValid = false;
    }

    // Validate courseName
    if (!formState.courseName.trim()) {
      errors.courseName = "Course Name is required";
      isValid = false;
    }

    // Validate credit
    if (!formState.credit.trim()) {
      errors.credit = "Credit is required";
      isValid = false;
    }

    // Validate coordinator
    if (!formState.coordinator.trim()) {
      errors.coordinator = "Coordinator is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };


  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <form>
            <div className="grid1">
              <div className="form-group">
                <label htmlFor="Code">Course Code</label>
                <input
                  name="Code"
                  value={formState.courseCode}
                  onChange={handleCodeChange}
                />
                {formErrors.courseCode && (
                  <p className="error">{formErrors.courseCode}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="Course">Course Name</label>
                <input
                  name="Course"
                  value={formState.courseName}
                  onChange={handleNameChange}
                />
                {formErrors.courseName && (
                  <p className="error">{formErrors.courseName}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="Credit">Credit</label>
                <input
                  name="Credit"
                  value={formState.credit}
                  onChange={handleCreditChange}
                />
                {formErrors.credit && (
                  <p className="error">{formErrors.credit}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="Core">Core/Technical</label>
                <select
                  name="Core"
                  value={formState.core}
                  onChange={handleCoreChange}
                >
                  <option value="Core">Core</option>
                  <option value="Technical">Technical</option>
                </select>
                {formErrors.core && (
                  <p className="error">{formErrors.core}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="Coordinator">Coordinator</label>
                <input
                  name="Coordinator"
                  value={formState.coordinator}
                  onChange={handleCoordinatorChange}
                />
                {formErrors.coordinator && (
                  <p className="error">{formErrors.coordinator}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="Prequiste">Prequiste</label>
                <select
                  name="Prequiste"
                  value={formState.prequiste}
                  onChange={handlePrequisteChange}
                  placeholder="Select Prequiste"
                >
                  <option value="OperatingSystem">Operating System</option>
                  <option value="SoftwareEngineering">
                    Software Engineering
                  </option>
                </select>
                {formErrors.prequiste && (
                  <p className="error">{formErrors.prequiste}</p>
                )}
              </div>
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
              Add Course
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
