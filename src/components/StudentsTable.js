import React,{useEffect, useState} from "react";
import "../styles/StudentsTable.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const StudentsTable = (students) => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);
  
  console.log(students);
  
  useEffect(()=>{
    getStudents(); 
    console.log('useEffect 1');
  },[])

  async function getStudents() {
    const res = await axios.get(`http://localhost:7000/students`);
    const data = await res.data;
    console.log(data);
    setStudentData(data);
   }
  
    async function deleteStudents(id) {
      const res = await axios.delete(`http://localhost:7000/students/${id}`);
      const data = await res.data;
      console.log(data);
      console.log(studentData);
      const curenetStudentData = studentData.filter(student=> student.id !== id);
      setStudentData(curenetStudentData);
      navigate('/');
    }

  return (
    <div className="main-body">
      <div className="tab-container">
        <div className="tab-header-container">
          <h1 className="tab-header">Students List</h1>
        </div>
        <div className="add-btn-container">
          <Link to='/addstudent'> <button className="btn add-btn">Add Student</button></Link>
        </div>
      </div>
      {(studentData.length === 0) ? <div> <h1>No students Available</h1></div> :
      <table className="sdnt-table">
        <thead>
        <tr>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Student Emai Id</th>
          {/* <th>Student DOB</th>
          <th>Student Location</th> */}
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {  studentData.map((student) => {
          return (
            
            <tr key={student.id}> 
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              {/* <td>{student.dob}</td>
              <td>{student.location}</td> */}
              <td>
                {
                  <div className="btn-container">
                    <button className="btn view-btn" onClick={()=>navigate(`/student/${student.id}`)} >View</button>
                    <button className="btn edit-btn" onClick={()=>navigate(`/updatestudent/${student.id}`)}>Edit</button>
                     <button className="btn del-btn" onClick={()=>deleteStudents(student.id)}>Delete</button>
                  </div>
                }
              </td>
            </tr>
            
          );
        })}
        </tbody>
      </table>}
    </div>
  );
};

export default StudentsTable;



