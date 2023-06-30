import "./App.css";
import DetailCollectionForm from "./components/DetailCollectonForm";
import Home from "./components/Home";
import StudentsTable from "./components/StudentsTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() { 
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />}></Route>
          <Route path="/studentstable" element={<StudentsTable />}></Route>
          <Route path="/student/:id" element={<DetailCollectionForm  formName='Student Details' btnName='Back' process='view'/>}></Route>
          <Route path='/addstudent' element={<DetailCollectionForm formName='Student Information collection Form' btnName='ADD'   process='add'/> } ></Route>
          <Route path='/updatestudent/:id' element={<DetailCollectionForm formName='Updation Form' btnName='UPDATE' process='update'/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;









// import { useState, useEffect } from "react";
// import axios from "axios";
 // const [studentData, setStudentData] = useState([]);

  // useEffect(() => {
  //   getStudents();
  //   console.log(studentData)
  // },[]);
  // // getStudents();
  // async function getStudents() {
  //   const res = await axios.get(`http://localhost:7000/students`);
  //   const data = await res.data;
  //   console.log(data);
  //   setStudentData(data);
  //  }