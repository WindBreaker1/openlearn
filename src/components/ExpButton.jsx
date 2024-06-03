import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import Confetti from 'react-dom-confetti';
import './ExpButton.css';

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

export default function ExpButton() {
  const { user, setUser, calculateStreak, addExp } = useContext(UserContext);
  const [isClicked, setIsClicked] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleClick = () => {
    calculateStreak();
    setIsClicked(!isClicked);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  return (
    <div>
      <Confetti className='confetti' active={confetti} config={config} />
      <button 
        className={`exp-button ${isClicked ? 'clicked' : ''}`} 
        onClick={() => {handleClick(); addExp();}}
        disabled={isClicked}>
        <FontAwesomeIcon icon={faCheck} /> Mark Lesson Done!
      </button>
    </div>
  );
}