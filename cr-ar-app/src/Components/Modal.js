import "../Styles/ModalStyles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Modal({ closeModal, onSubmit }) {
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
   const selectedFullName = e.target.value;
   // Find the coordinator object with the selected full name
   const selectedCoordinator = coordinator.find(
     (coordinator) => coordinator.FullName === selectedFullName
   );

   // If the coordinator with the selected full name is found, update the form state with their ID
   if (selectedCoordinator) {
     setFormState({
       ...formState,
       coordinator: selectedCoordinator.StaffID, // Set the ID of the coordinator as the value
     });
   } else {
     setFormState({
       ...formState,
       coordinator: "", // Reset to empty string if the coordinator is not found
     });
   }
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
  };

  const [formState, setFormState] = useState({
    courseCode: "",
    courseName: "",
    credit: "",
    core: "Core",
    coordinator: "",
    prequiste: "",
    status: "0",
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

  const [coursesCodes, setCourseCodes] = useState([]);
  const [courseName, setCourseNames] = useState([]);
  const [coordinator, setCoordinator] = useState([]);
  const [prequiste, setPrerequiste] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/availableCourseDetails")
      .then((res) => res.json())
      .then((data) => {
        setCourseCodes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const values = coursesCodes.map((opts, i) => ({
    value: opts.CourseCode,
  }));

  useEffect(() => {
    fetch("http://localhost:3300/availableCoordinators")
      .then((res) => res.json())
      .then((data) => {
        setCoordinator(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const values3 = coordinator.map((opts, i) => ({
    value: opts.FullName,
  }));

  useEffect(() => {
    if (formState.courseCode) {
      fetch(
        `http://localhost:3300/addCourseForm/${encodeURIComponent(
          formState.courseCode
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCourseNames(data);
        })
        .catch((err) => console.log(err));
    }
  }, [formState.courseCode]);

  const values2 = courseName.map((opts, i) => ({
    value: opts.CourseName,
  }));

 useEffect(() => {
  // Set the first value of `values2` as the default value for "Course Name"
  if (values2.length > 0 && !formState.courseName) {
    setFormState({
      ...formState,
      courseName: values2[0].value,
    });
  }
 }, [values2, formState.courseName]);
  

// Prerequiste
  useEffect(() => {
    if (formState.courseCode) {
      fetch(
        `http://localhost:3300/prerequiste/${encodeURIComponent(
          formState.courseCode
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPrerequiste(data);
        })
        .catch((err) => console.log(err));
    }
  }, [formState.courseCode]);

  const valuesP = prequiste.map((opts, i) => ({
    value: opts.PrerequesiteCode,
  }));

  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <form>
            <div className="grid1">
              <div className="form-group">
                <label htmlFor="Code">Course Code</label>
                <select
                  name="Code"
                  value={formState.courseCode}
                  onChange={handleCodeChange}
                >
                  <option value="" disabled>
                    Select Course Code
                  </option>
                  {values.map((value, index) => (
                    <option key={index} value={value.value}>
                      {value.value}
                    </option>
                  ))}
                </select>
                {formErrors.courseCode && (
                  <p className="error">{formErrors.courseCode}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="Course">Course Name</label>
                <select
                  name="Course"
                  value={formState.courseName}
                  onChange={handleNameChange}
                >
                  {values2.map((value, index) => (
                    <option key={index} value={value.value}>
                      {value.value}
                    </option>
                  ))}
                </select>
                {formErrors.courseName && (
                  <p className="error">{formErrors.courseName}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="Credit">Credit</label>
                <select
                  name="Credit"
                  value={formState.credit}
                  onChange={handleCreditChange}
                >
                  <option value="" disabled>
                    Select Credit
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
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
                {formErrors.core && <p className="error">{formErrors.core}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="Coordinator">Coordinator</label>
                <select
                  name="Coordinator"
                  value={formState.coordinator}
                  onChange={handleCoordinatorChange}
                >
                  <option value="" disabled>
                    Select Coordinator
                  </option>
                  {values3.map((value, index) => (
                    <option key={index} value={value.value}>
                      {value.value}
                    </option>
                  ))}
                </select>
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
                >
                  <option value="" disabled>
                    Select Prequiste
                  </option>
                  {valuesP.map((value, index) => (
                    <option key={index} value={value.value}>
                      {value.value}
                    </option>
                  ))}
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
