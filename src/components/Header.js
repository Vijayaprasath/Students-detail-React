import React from 'react';
import '../styles/Header.css'

const Header = ({onLogin, showLog}) => {
  return (
    <div className='main-head-container'>
      <div className='inst-logo-container'>
        <p style={{color:'white'}}><i>The</i> <br/><b><i>TALENT SCHOOL</i></b></p>
      </div>
      <div className='header-list-container'>
        <ul className='header-list'>
          <li><button className='header-btn'><b>About</b></button></li>
          <li><button className='header-btn' onClick={onLogin} ><b>{showLog? 'Login':'Logout'}</b></button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
