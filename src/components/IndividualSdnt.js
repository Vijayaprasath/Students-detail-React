import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/IndividualSdnt.css";

const IndividualSdnt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({});

  useEffect(() => {
    viewStudent();
  }, []);

  const viewStudent = async () => {
    const res = await axios.get(`http://localhost:7000/students/${id}`);
    const data = await res.data;
    setStudent(data);
  };

  const moveBack = () => {
    navigate("/");
  };

  return (
    <div className="table-container">
      <button onClick={() => moveBack()}>Back</button>
      <table className="sdnt-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Emai Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IndividualSdnt;
