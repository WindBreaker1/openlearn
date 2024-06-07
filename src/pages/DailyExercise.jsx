import './DailyExercise.css';
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../context/userContext';
import {toast} from "react-hot-toast";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
  const [confetti, setConfetti] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const date = new Date();
    const filteredExercises = exercises.filter(exercise => exercise.language === selectedLanguage);
    const index = date.getDate() % filteredExercises.length;
    setDailyExercise(filteredExercises[index]);
  }, [exercises, selectedLanguage]);

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

  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faCalendarCheck} style={{color: "#3f932f",}} /> Daily Exercise</h1>
      <p>Here is today's exercise. Complete one every day to increase your streak!</p>
      <p>Answers are written using lowercase characters. Remember to check your spelling!</p>
      <p>Click the button below to select a programming language that you want your questions to be based around.</p>
      <select id="language" name="language" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
          <option value="" disabled>Select a language</option>
          <option value="Python">Python</option>
          <option value="C/C++">C/C++</option>
          <option value="Java">Java</option>
          <option value="Unity/C#">Unity/C#</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="SQL">SQL</option>
          <option value="PHP">PHP</option>
          <option value="Ruby">Ruby</option>
          <option value="Swift">Swift</option>
          <option value="Rust">Rust</option>
          <option value="Kotlin">Kotlin</option>
          <option value="Go/Golang">Go/Golang</option>
          <option value="Other">Other</option>
      </select>
      {!dailyExercise ? <p>No exercise available... 😭</p> : null}
      {!!dailyExercise &&
        <div className='exercise-container'>
          <h2>{dailyExercise.questionTitle}</h2>
          <ReactMarkdown
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
                ) : (
                  <code className={`inline-code ${className}`} {...props}>
                    {children}
                  </code>
                )
              },
              img({node, ...props}) {
                return <img {...props} style={{width: '400px'}} />
              },
            }}
          >
            {dailyExercise.questionText}
          </ReactMarkdown>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Your answer"
            />
            <Confetti className='confetti' active={confetti} config={config} />
            <button className='exercise-submit' type="submit" disabled={isClicked}><FontAwesomeIcon icon={faArrowRightToBracket} /> Submit</button>
          </form>
        </div>
      }
    </div>
  );
}