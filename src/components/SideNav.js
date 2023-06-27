import React from 'react';
import '../styles/SideNav.css';
import GetStudent from './GetStudent';

const SideNav = ({onGet, onAdd, onUpd, onDel}) => {

  return (
    <div className='main-nav-container'>
      <div className='nav-bar-div'>
        {/* <ul className='sdnt-list'>
            <li className='sdnt-list-item'><button>Get Student</button></li>
            <li><button>Add student</button></li>
            <li><button>Update Student</button></li>
            <li><button>Delete Student</button></li>
        </ul> */}
        <button onClick={onGet}>Get Student</button>
        <button onClick={onAdd}>Add Student</button>
        <button onClick={onUpd}>Update Student</button>
        <button onClick={onDel}>Delete Student</button>
      </div>
    </div>
  )
}

export default SideNav
