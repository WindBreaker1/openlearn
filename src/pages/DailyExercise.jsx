import './DailyExercise.css';
import { useState, useEffect, useContext } from 'react';
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

export default function DailyExercise2() {
  const { exercises, setExercises, addExp, calculateStreak } = useContext(UserContext);
  const [dailyExercise, setDailyExercise] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');

  const [confetti, setConfetti] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const date = new Date();
    const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const random = Math.sin(seed) * 10000;
    const index = Math.floor((random - Math.floor(random)) * exercises.length);
    setDailyExercise(exercises[index]);
  }, [exercises]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer === dailyExercise.answer) {
      addExp();
      calculateStreak();
      setConfetti(true);
      setTimeout(() => setConfetti(false), 3000);
      setIsClicked(!isClicked);
      toast.success("Correct answer! You have completed today's exercise!");
    } else {
      toast.error("Incorrect answer, try again. Check your spelling!");
    }
  };

  if (!dailyExercise) {
    return <div>Loading...</div>;
  }

  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faCalendarCheck} style={{color: "#3f932f",}} /> Daily Exercise</h1>
      <p>Here is today's exercise. Complete one every day to increase your streak!</p>
      <p>Answers are written using lowercase characters. Remember to check your spelling!</p>
      <div className='exercise-container'>
        <h2>{dailyExercise.questionText}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Your answer"
          />
          <Confetti className='confetti' active={confetti} config={config} />
          <button className='exercise-submit' type="submit" disabled={isClicked}>Submit</button>
        </form>
      </div>
    </div>
  );
}