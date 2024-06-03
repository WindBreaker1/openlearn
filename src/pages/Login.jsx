import { useState } from "react";
// importing axios
import axios from 'axios';
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  // change page title
  document.title = 'Login';
  
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  
  const loginUser = async (e) => {
    e.preventDefault();
    const {email, password} = data;
    try {
      const {data} = await axios.post('/login', {
        email, password
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success('Login successful, welcome back! 🥳');
        setData({});
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="login-page">
      <h1>Login</h1>
      <p>Enter your information and log in to your account!</p>
      <form className="general-form" onSubmit={loginUser}>
        <div className="form-item">
          <label>Email:</label>
          <input type="email" placeholder='Enter Email Here...' value={data.email} onChange={(e) => {setData({...data, email: e.target.value})}} />
        </div>
        <div className="form-item">
          <label>Password:</label>
          <input type="password" placeholder='Enter Password Here...' value={data.password} onChange={(e) => {setData({...data, password: e.target.value})}} />
        </div>
        <button type='submit'><FontAwesomeIcon icon={faRightToBracket} /> Submit</button>
      </form>
    </div>
  )
}
