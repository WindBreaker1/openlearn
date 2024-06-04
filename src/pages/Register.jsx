import { isValidElement, useState } from "react";
import axios from "axios"
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import './Register.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Register() {
  // change page title
  document.title = 'Register';
  
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: false,
    image: '',
    experience: 0,
    level: 1,
    rank: 'Bronze', 
    streak: 0,
    bestStreak: 0,
  })
  
  const registerUser = async (e) => {
    // This makes it so the page doesn't load instantly.
    e.preventDefault();
    // de-structuring the data
    const {name, email, password, isAdmin, image, experience, level, rank, streak, bestStreak,} = data;
    // sending the data to the backend when user registers
    try {
      const {data} = await axios.post('/register', {
        // information sent to the backend
        name, email, password, isAdmin, image, experience, level, rank, streak, bestStreak,
      });
      // if there is an error with the data we're sending, show a notification
      if (data.error) {
        toast.error(data.error);
      } else {
        // reset the data and the input fields on the page
        setData({});
        // if user registers, send success message
        toast.success('Login successful, welcome! 🥳');
        // after user registers, redirect user to home page
        navigate('/login');
      }
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
    <div className="register-page">
      <h1>Register</h1>
      <p>Register your information below!</p>
      <form className="general-form" onSubmit={registerUser}>
        <div className="form-item">
          <label>Name:</label>
          <input type="text" placeholder='Enter Name Here...' value={data.name} onChange={(e) => {setData({...data, name: e.target.value})}} />
        </div>
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
