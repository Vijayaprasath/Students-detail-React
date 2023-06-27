import React, { useState, useEffect } from "react";
import "../styles/DetailCollectionForm.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DetailCollectionForm = ({ formName, btnName, process }) => {
  const navigate = useNavigate();
  const [studentsDetail, setStudentsDetail] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const { id: studentId } = useParams();
  const [showbutton, setShowButton] = useState(false);
  const [isIdEmpty, setIsIdEmpty] = useState(false);
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isDobEmpty, setIsDobEmpty] = useState(false);
  const [isLocationEmpty, setIsLocationEmpty] = useState(false);
  const [isIdUnique, setIsIdUnique] = useState(true);

  const updateStudent = async () => {
    const res = await axios.get(`http://localhost:7000/students/${studentId}`);
    const data = await res.data;

    setId(data.id);
    setName(data.name);
    setEmail(data.email);
    setDob(data.dob);
    setLocation(data.location);
  };

  const viewStudentData = async () => {
    const res = await axios.get(`http://localhost:7000/students/${studentId}`);
    const data = await res.data;

    setId(data.id);
    setName(data.name);
    setEmail(data.email);
    setDob(data.dob);
    setLocation(data.location);
  };

  useEffect(() => {
    if (process === "add") {
      studentsData();
    }
    if (process === "update") {
      updateStudent();
    }
    if (process === "view") {
      viewStudentData();
    }
  }, []);

  useEffect(() => {
    showSubmitButton();
  }, [email, name, dob, location]);

  const studentsData = async (id) => {
    const res = await axios.get(`http://localhost:7000/students`);
    const data = await res.data;
    console.log('server hitted');
    setStudentsDetail(data);
  };
 
  const uniqueId = (id) => {
    console.log(studentsDetail)
    setIsIdUnique(studentsDetail.every((student) => student.id !== id));
  };

  const addStudent = async (student) => {
    if (!id) {
      console.log("Enter the id");
      return;
    }
    console.log(student);
    const res = await axios.post("http://localhost:7000/students", student);
    const data = await res;
    console.log(data);
    navigate("/");
  };

  const updStudent = async (student) => {
    const { id } = student;
    console.log(student);
    const res = await axios.put(
      `http://localhost:7000/students/${id}`,
      student
    );
    const data = await res;
    console.log(data);
    navigate("/");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      alert("Please enter the id");
      return;
    }
    if (process === "add") {
      addStudent({ id, name, email, dob, location });
    }
    if (process === "update") {
      updStudent({ id, name, email, dob, location });
    }
    setId("");
    setName("");
    setEmail("");
    setDob("");
    setLocation("");
  };

  const showSubmitButton = () => {
    if (!id || !name || !email || !dob || !location || isIdUnique === false) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  const onChangeEventOfId = (e) => {
    if (process === "add") {
      let value = e.target.value.trimStart();
      uniqueId(value);
      setId(value);
      value === "" ? setIsIdEmpty(true) : setIsIdEmpty(false);
    }
  };

  const onChangeEventOfName = (e) => {
    if (process === "add" || process === "update") {
      setName(e.target.value.trimStart());
      e.target.value.trimStart() === ""
        ? setIsNameEmpty(true)
        : setIsNameEmpty(false);
    }
  };

  const onChangeEventOfEmail = (e) => {
    if (process === "add" || process === "update") {
      setEmail(e.target.value.trimStart());
      e.target.value.trimStart() === ""
        ? setIsEmailEmpty(true)
        : setIsEmailEmpty(false);
    }
  };

  const onChangeEventOfDob = (e) => {
    if (process === "add" || process === "update") {
      setDob(e.target.value.trimStart());
      e.target.value.trimStart() === ""
        ? setIsDobEmpty(true)
        : setIsDobEmpty(false);
    }
  };

  const onChangeEventOfLocation = (e) => {
    if (process === "add" || process === "update") {
      setLocation(e.target.value.trimStart());
      e.target.value.trimStart() === ""
        ? setIsLocationEmpty(true)
        : setIsLocationEmpty(false);
    }
  };

  return (
    <div className="sdnt-form-container">
      <form>
        <div className="sdnt-data-collection-form">
          <h1 className="form-name">{formName}</h1>
          <label>Student Id</label>
          <input
            type="text"
            value={id}
            className={isIdEmpty ? "empty-input" : "valid-input"}
            placeholder={isIdEmpty ? "Please enter the Id" : ""}
            onChange={(e) => onChangeEventOfId(e)}
          />
          {!isIdUnique && (
            <p className="uniqueid-err"> *Please enter the unique id</p>
          )}
          <label>Student Name</label>
          <input
            type="text"
            value={name}
            className={isNameEmpty ? "empty-input" : "valid-input"}
            placeholder={isNameEmpty ? "Please enter the Name" : ""}
            onChange={(e) => onChangeEventOfName(e)}
          />
          <label>Student Email</label>
          <input
            type="email"
            value={email}
            className={isEmailEmpty ? "empty-input" : "valid-input"}
            placeholder={isEmailEmpty ? "Please enter the Email" : ""}
            onChange={(e) => onChangeEventOfEmail(e)}
          />
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            className={isDobEmpty ? "empty-input" : "valid-input"}
            placeholder={isDobEmpty ? "Please enter the Dob" : ""}
            onChange={(e) => onChangeEventOfDob(e)}
          />
          <label>Location</label>
          <input
            type="text"
            value={location}
            className={isLocationEmpty ? "empty-input" : "valid-input"}
            placeholder={isLocationEmpty ? "Please enter the Locaton" : ""}
            onChange={(e) => onChangeEventOfLocation(e)}
          />
          <div className="btns-container">
            <button className="back-btn" onClick={() => navigate("/")}>
              Back
            </button>
            {process !== "view" && (
              <button
                className={showbutton ? "submit-btn " : "submit-btn blur"}
                onClick={onSubmit}
                disabled={!showbutton}
              >
                {btnName}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DetailCollectionForm;
