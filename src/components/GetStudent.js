import React, { useState, useEffect } from "react";
import '../styles/GetStudent.css'

import axios from "axios";

const GetStudent = ({formName, btnName, process, allStudent}) => {
    const [id, setId] = useState('');
    const [allStdnt, setAllStdnt] = useState(false);
    const [showErr, setShowErr] = useState(false);
    const [showData, setShowData] = useState(false);

    const fetchData = async(e)=>{
        e.preventDefault();
        if(!id ){
            console.log('Enter the id');
            setShowErr(true)
            return
        }
        if(process === 'get'){
          const res = await axios.get(`http://localhost:7000/students`);
          const data = await res.data;
          console.log(data);
          setShowErr(false)
        }
        if(process === 'delete'){
          const res = await axios.delete(`http://localhost:7000/students/${id}`);
          const data = await res;
          console.log(data);
          setShowErr(false)
        }
    }

    const toggleAllSdnt = ()=> {
        setAllStdnt(!allStdnt)
    }


  return (
    <div className="get-sdnt-container">
      <form>
        <div className="get-sdnt-form">
          <h1>{formName}</h1>
          <label>Student Id</label>
          <input value={id} onChange={(e)=>{setId(e.target.value)}} type="text" placeholder="  Ex: 12345"/>
          <div className="get-allsdnt-checkbox-container">
            <input value={allStdnt} onChange={toggleAllSdnt} checked={allStdnt} type="checkbox" className='get-allsdnt-checkbox' />
            <b>{allStudent} All Student Details</b>
          </div>
          <p className="error-message" >{showErr? 'Enter the id':''}</p>
          <button className="get-btn" onClick={fetchData}>{btnName}</button>
        </div>
      </form>
    </div>
  );
};

export default GetStudent;
