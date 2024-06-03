import './DailyExercise.css';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../context/userContext';
import {toast} from "react-hot-toast";
import Confetti from 'react-dom-confetti';

const config = {
  angle: 360,
  spread: 360,
  startVelocity: 20,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

export default function DailyExercise() {
  document.title = 'Daily Exercise';

  const { addExp, calculateStreak } = useContext(UserContext);
  const [confetti, setConfetti] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [answer, setAnswer] = useState('');

  const [day, setDay] = useState(() => {
    const today = new Date().toDateString();
    const savedDay = localStorage.getItem('day');
    const savedDate = localStorage.getItem('date');
    if (savedDay && savedDate === today) {
      return Number(savedDay);
    } else {
      const newDay = Math.floor(Math.random() * 4) + 1;
      localStorage.setItem('day', newDay);
      localStorage.setItem('date', today);
      return newDay;
    }
  });

  const handleExerciseLogic = () => {
    toast.success("Correct answer! You have completed today's exercise!");
    addExp();
    calculateStreak();
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
    setIsClicked(!isClicked);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // exercise 1
    if (day === 1) {
      if (answer.toLowerCase() === 'variables' || answer.toLowerCase() === 'variable') {
        handleExerciseLogic();
      } else {
        toast.error("Incorrect answer, try again. Check your spelling!");
      }
    }
    //exercise 2
    if (day === 2) {
      if (answer.toLowerCase() === 'functions' || answer.toLowerCase() === 'function') {
        handleExerciseLogic();
      } else {
        toast.error("Incorrect answer, try again. Check your spelling!");
      }
    }
    //exercise 3
    if (day === 3) {
      if (answer.toLowerCase() === 'arrays' || answer.toLowerCase() === 'array') {
        handleExerciseLogic();
      } else {
        toast.error("Incorrect answer, try again. Check your spelling!");
      }
    }
    //exercise 4
    if (day === 4) {
      if (answer.toLowerCase() === 'objects' || answer.toLowerCase() === 'object') {
        handleExerciseLogic();
      } else {
        toast.error("Incorrect answer, try again. Check your spelling!");
      }
    }
  }
  
  return (
    <div className='page' id='daily-exercise-page'>
      <h1><FontAwesomeIcon icon={faCalendarCheck} style={{color: "#3f932f",}} /> Daily Exercise</h1>
      <p>Here is today's exercise. Complete one every day to increase your streak!</p>
      {/* Exercise 1 */}
      {day === 1 && (
      <div className='exercise-container'>
        <h2>What do you use to store data in JavaScript?</h2>
        <form onSubmit={handleSubmit}>
          <div>In JavaScript, <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Answer goes here..." /> are used to store information that can be referenced and manipulated in your code.</div>
          <Confetti className='confetti' active={confetti} config={config} />
          <button className='exercise-submit' disabled={isClicked} type="submit">Submit</button>
        </form>
      </div>
      )}
      {/* Exercise 2 */}
      {day === 2 && (
      <div className="exercise-container">
        <h2>What do you use to group code together in JavaScript?</h2>
        <form onSubmit={handleSubmit}>
          <div>In JavaScript, <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Answer goes here..." /> are used to group code together and execute it when called.</div>
          <Confetti className='confetti' active={confetti} config={config} />
          <button className='exercise-submit' disabled={isClicked} type="submit">Submit</button>
        </form>
      </div>
      )}
      {/* Exercise 3 */}
      {day === 3 && (
      <div className="exercise-container">
        <h2>What do you use to store multiple values in JavaScript?</h2>
        <form onSubmit={handleSubmit}>
          <div>In JavaScript, <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Answer goes here..." /> are used to store multiple values in a single variable.</div>
          <Confetti className='confetti' active={confetti} config={config} />
          <button className='exercise-submit' disabled={isClicked} type="submit">Submit</button>
        </form>
      </div>
      )}
      {/* Exercuse 4 */}
      {day === 4 && (
      <div className="exercise-container">
        <h2>What do you use to store more complex data in JavaScript?</h2>
        <form onSubmit={handleSubmit}>
          <div>In JavaScript, <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Answer goes here..." /> are used to store data in key-value pairs.</div>
          <Confetti className='confetti' active={confetti} config={config} />
          <button className='exercise-submit' disabled={isClicked} type="submit">Submit</button>
        </form>
      </div>
      )}
      {/* Exercise 5 */}
    </div>
  )
}
