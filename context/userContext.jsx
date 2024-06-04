import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate, Link } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [language, setLanguage] = useState('');

  // this will activate every time a page renders,
  // tells if there is a user logged in 
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get('/profile');
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    if (!user) {
      fetchUserData();
    }
  }, [user]);
  
  // logic for the logout function
  function logOut() {
    axios.post('/logout').then(() => {
      setUser(null);
      toast.success('Logged out successfully!');
      navigate('/login');
    });
  }
  
  // add experience for completed lessons
  const addExp = async () => {
    try {
      const response = await axios.put('/addExperience', { email: user.email });
      setUser(response.data);
    } catch (error) {
      console.error('Error updating user experience:', error);
    }
  };

  // functie pentru streak
  const calculateStreak = async () => {
    try {
      const response = await axios.put('/addStreak', { email: user.email });
      setUser(response.data);
    } catch (error) {
      console.error('Error updating user streak:', error);
    }
  };

  // fetching exercises
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('/getDailyExercises');
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExercises();
  }, []);

  // fetching lessons
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        setLessons(response.data);
      } catch (error) {
        toast.error('Failed to fetch lessons');
      }
    };
    fetchLessons();
  }, []);

  return (
    <UserContext.Provider value={{
      user, setUser, 
      exercises, setExercises,
      lessons, setLessons,
      answers, setAnswers, 
      language, setLanguage, 
      logOut, calculateStreak, addExp }}>
      {children}
    </UserContext.Provider>
  );
}