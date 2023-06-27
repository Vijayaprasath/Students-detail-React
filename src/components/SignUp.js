import React, {useState} from "react";
import '../styles/SignUp.css'


const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formSubmit =(e) => {
        e.preventDefault();
        console.log(email);
    }



  return (
    <div className="register-container">
      <form >
        <div className="register-form">
          <h2>Register Account</h2>
          <label>Full Name</label> 
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />  
          <label>Email</label> 
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />  
          <label>Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  /> 
          <label>Confirm password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  /> 
          <button  className="register2-btn" onClick={formSubmit}>Register</button>
          <button className="login2-btn">Already have an account? Login here</button>
        </div>
      </form>
    </div>
  );
};



export default Login;