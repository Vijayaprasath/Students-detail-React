import React, {useState} from "react";
import  '../styles/login.css'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();

    const formSubmit =(e) => {
        e.preventDefault();
        console.log(email);
        if(email === 'vijay@gmail.com' && password === 'vijay'){
          console.log("clicked");
        
      } else {
         console.log('invalid credentials');
      }
    }
    const togglePassword = () => {
        setShowPass(!showPass);
    }

  return (
    <div className="login-container">
      <form >
        <div className="login-form">
          <h2>Log in</h2>
          <label>Email</label> 
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required/> 
          <label>password</label> 
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type={showPass? 'text' : 'password'} /> 
          <div className="check-box-container">
          <input onChange={togglePassword} className="check-box" type="checkbox" checked={showPass}/>
          <label>Show Password</label>
          </div>
          <button className="login-btn" onClick={formSubmit}>Login</button>
          <button className="register-btn">Don't have an account? Register here</button>
        </div>
      </form>
    </div>
  );
};



export default Login;
