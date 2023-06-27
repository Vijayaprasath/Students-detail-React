import React, {useState, useEffect} from 'react'

const UpdateStudent = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [location, setLocation] = useState('')


    
  return (
    <div>
      <form>
        <div>
        <label>Student Id</label>
            <h1>Student Information Updation Form</h1>
            <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <label>Student Name</label>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <label>Student Email</label>
             <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Date of Birth</label>
             <input type='date' value={dob} onChange={(e)=>{setDob(e.target.value)}}/>
            <label>Location</label>
            <input type='text' value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
          <button className='submit-btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateStudent
