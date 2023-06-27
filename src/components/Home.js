import React, { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import "../styles/Home.css";
import GetStudent from "./GetStudent"; 
import DetailCollectionForm from "./DetailCollectonForm";
import StudentsTable from "./StudentsTable";
import SideNav from './SideNav'


const Home = ({students}) => {
  const [showGetStudent, setShowGetStudent] = useState(false);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [showUpdStudent, setShowUpdStudent] = useState(false);
  const [showDelStudent, setShowDelStudent] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
console.log(students)

  return (
    <div className="home-main-container">
      <div className="head-container">
        <Header onLogin={()=> {setShowLogin(true); setShowGetStudent(false); setShowAddStudent(false); setShowUpdStudent(false); setShowDelStudent(false)}} showLog={!showLogin}/>
      </div>
      <div className="body-container">
        <StudentsTable students={students}/>
      </div>

    </div>
  );
};

export default Home;



{/* 
      <div className="sideNav-body">
<SideNav
  onGet={() => {setShowGetStudent(true); setShowAddStudent(false); setShowUpdStudent(false); setShowDelStudent(false); setShowLogin(false)}}
  onAdd={() => {setShowAddStudent(true); setShowGetStudent(false); setShowUpdStudent(false); setShowDelStudent(false); setShowLogin(false)}}
  onUpd={() => {setShowUpdStudent(true); setShowGetStudent(false); setShowAddStudent(false); setShowDelStudent(false); setShowLogin(false)}}
  onDel={() => {setShowDelStudent(true); setShowGetStudent(false); setShowAddStudent(false); setShowUpdStudent(false); setShowLogin(false)}}
/>
</div>
<div className="login-body">
{showGetStudent && <GetStudent formName='Get student Details' allStudent='Get'/>}
{showAddStudent && <DetailCollectionForm  formName='Student Information collection Form' />}
{showUpdStudent && <DetailCollectionForm  formName='Updation Form'/>}
{showDelStudent && <GetStudent formName='Delete student' allStudent='Delete' />}
{showLogin && <Login />}
</div> */}