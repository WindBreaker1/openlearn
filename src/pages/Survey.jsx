import './Survey.css';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';
import LinkButton from '../components/LinkButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faKey } from '@fortawesome/free-solid-svg-icons';
import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
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

export default function Survey() {
  document.title = 'Survey';

  const {answers, setAnswers, language, setLanguage} = useContext(UserContext);

  const [confetti, setConfetti] = useState(false);

  const handleAnswerData = async (e) => {
    setAnswers(prevAnswers => [...prevAnswers, e.target.value]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLanguage(fetchCodingLang(answers));
    console.log(language);
    //navigate('/survey-results');
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  }

  function fetchCodingLang(answers) {
    // Count the frequency of each answer
    const counts = {};
    for (let answer of answers) {
      if (counts[answer]) {
        counts[answer]++;
      } else {
        counts[answer] = 1;
      }
    }
  
    // Find the most frequent answer
    let mostFrequentAnswer = null;
    let maxCount = 0;
    for (let answer in counts) {
      if (counts[answer] > maxCount) {
        maxCount = counts[answer];
        mostFrequentAnswer = answer;
      }
    }
  
    /*
    - a: Web Development - HTML, CSS, JavaScript into React, (optional: SQL, PHP, Ruby, Rust)
    - b: Native App Development - Kotlin for Android, Swift for Apple
    - c: Video Games - Unity/C#
    - d: Enterprise Level Apps - C++, Java
    - e: Other/Data Science and Machine Learning - Python
    */

    // Return a link based on the most frequent answer
    switch (mostFrequentAnswer) {
      case 'a':
        return 'Web Development';
      case 'b':
        return 'Native App Development';
      case 'c':
        return 'Video Games';
      case 'd':
        return 'Enterprise Level Apps';
      case 'e': 
        return 'Other/Data Science and Machine Learning';
      default:
        return 'No language found.';
    }
  }

  return (
    <div className='survey-page'>
      {/* description */}
      <h1>Survey</h1>
      <p>
        Welcome to the survey page!
      </p>
      <p>
        We all know that choosing a programming language is difficult. Even
        choosing a field in computer programming to work in can be challenging. 
        There are so many languages to choose from, and they all have their 
        advantages and disatvantages.
      </p>
      <p>
        That's why we created this survey! We want to help you to eliminate 
        years of indecision and get you straight to solving problems, building projects,
        and making apps that change the world!
      </p>
      {/* register or login section */}
      <div className="register-for-survey">
        <h3>If you're not logged in, please register or login to view survey results.</h3>
        <div className="button-section">
          <Link to='/register'><button><FontAwesomeIcon icon={faIdCard} /> Register</button></Link>
          <Link to='/login'><button><FontAwesomeIcon icon={faKey} /> Login</button></Link>
        </div>
        <h3>If you're already logged in, please continue 😊.</h3>
      </div>
      {/* survey */}
      <form className='general-survey-form' id='survey-form' >
        {/* question 1 * - written */}
        <div className="survey-form-item">
          <label>Question 1: Which of these do you use the most?</label>
          <div>
            <input type="radio" name='q1' value='a' id='websites' onChange={handleAnswerData} />
            <label htmlFor='websites'>Websites / Web Apps</label>
          </div>
          <div>
            <input type="radio" name='q1' value='b' id='phone-apps' onChange={handleAnswerData} />
            <label htmlFor='phone-apps'>Phone Apps</label>
          </div>
          <div>
            <input type="radio" name='q1' value='c' id='video-games' onChange={handleAnswerData} />
            <label htmlFor='video-games'>Video Games</label>
          </div>
          <div>
            <input type="radio" name='q1' value='d' id='desktop-apps' onChange={handleAnswerData} />
            <label htmlFor='desktop-apps'>Desktop Apps</label>
          </div>
          <div>
            <input type="radio" name='q1' value='e' id='other' onChange={handleAnswerData} />
            <label htmlFor='other'>AI Apps / Other</label>
          </div>
        </div>
        {/* question 2 - written */}
        <div className="survey-form-item">
          <label>
            Question 2: Which of these do you think you could improve 
            or make a better job in building?
          </label>
          <div>
            <input type="radio" name="q2" value="a" id="websites2" onChange={handleAnswerData} />
            <label htmlFor="websites2">Websitess/Web Apps</label>
          </div>
          <div>
            <input type="radio" name="q2" value="b" id="phone-apps2"  onChange={handleAnswerData} />
            <label htmlFor="phone-apps2">Phone Apps</label>
          </div>
          <div>
            <input type="radio" name="q2" value="c" id="video-games2"  onChange={handleAnswerData} />
            <label htmlFor="video-games2">Video Games</label>
          </div>
          <div>
            <input type="radio" name="q2" value="d" id="desktop-apps2"  onChange={handleAnswerData} />
            <label htmlFor="desktop-apps2">Desktop Apps</label>
          </div>
          <div>
            <input type="radio" name="q2" value="e" id="other2"  onChange={handleAnswerData} />
            <label htmlFor="other2">AI Apps / Other</label>
          </div>
        </div>
        {/* question 3 - written */}
        <div className="survey-form-item">
          <label>
            Question 3: How important is community support and resources to you?
          </label>
          <div>
            <input type="radio" name="q3" value="a" id="websites3" onChange={handleAnswerData} />
            <label htmlFor="websites3">Very important</label>
          </div>
          <div>
            <input type="radio" name="q3" value="b" id="phone-apps3" onChange={handleAnswerData} />
            <label htmlFor="phone-apps3">Somewhat important</label>
          </div>
          <div>
            <input type="radio" name="q3" value="c" id="video-games3" onChange={handleAnswerData} />
            <label htmlFor="video-games3">Not very important</label>
          </div>
          <div>
            <input type="radio" name="q3" value="d" id="desktop-apps3" onChange={handleAnswerData} />
            <label htmlFor="desktop-apps3">Not important at all</label>
          </div>
          <div>
            <input type="radio" name="q3" value="e" id="other3" onChange={handleAnswerData} />
            <label htmlFor="other3">I'm not sure</label>
          </div>
        </div>
        {/* question 4 - written */}
        <div className="survey-form-item">
          <label>
            Question 4: Which operating system do you primarily use?
          </label>
          <div>
            <input type="radio" name="q4" value="a" id="websites4" onChange={handleAnswerData} />
            <label htmlFor="websites4">Windows</label>
          </div>
          <div>
            <input type="radio" name="q4" value="b" id="phone-apps4" onChange={handleAnswerData} />
            <label htmlFor="phone-apps4">macOS</label>
          </div>
          <div>
            <input type="radio" name="q4" value="d" id="desktop-apps4" onChange={handleAnswerData} />
            <label htmlFor="desktop-apps4">Linux</label>
          </div>
          <div>
            <input type="radio" name="q4" value="e" id="other4" onChange={handleAnswerData} />
            <label htmlFor="other4">I use multiple operating systems</label>
          </div>
        </div>
        {/* question 5 - written */}
        <div className="survey-form-item">
          <label>
            Question 5: How comfortable are you with learning new concepts and technologies?
          </label>
          <div>
            <input type="radio" name="q5" value="a" id="websites5" onChange={handleAnswerData} />
            <label htmlFor="websites5">Very comfortable</label>
          </div>
          <div>
            <input type="radio" name="q5" value="c" id="video-games5" onChange={handleAnswerData} />
            <label htmlFor="video-games5">Somewhat comfortable</label>
          </div>
          <div>
            <input type="radio" name="q5" value="e" id="other5" onChange={handleAnswerData} />
            <label htmlFor="other5">Neutral</label>
          </div>
          <div>
            <input type="radio" name="q5" value="d" id="desktop-apps5" onChange={handleAnswerData} />
            <label htmlFor="desktop-apps5">Somewhat not comfortable</label>
          </div>
          <div>
            <input type="radio" name="q5" value="b" id="phone-apps5" onChange={handleAnswerData} />
            <label htmlFor="phone-apps5">Not comfortable</label>
          </div>
        </div>
        {/* question 6 - written */}
        <div className="survey-form-item">
          <label>
            Question 6: Which programming languages/frameworks/tools have you already tried learning?
          </label>
          <div>
            <input type="radio" name="q6" value="a" id="websites6" onChange={handleAnswerData} />
            <label htmlFor="websites6">HTML, CSS, JavaScript</label>
          </div>
          <div>
            <input type="radio" name="q6" value="c" id="video-games6" onChange={handleAnswerData} />
            <label htmlFor="video-games6">Unity, Godot, Unreal Engine 4</label>
          </div>
          <div>
            <input type="radio" name="q6" value="b" id="phone-apps6" onChange={handleAnswerData} />
            <label htmlFor="phone-apps6">Kotlin, Swift</label>
          </div>
          <div>
            <input type="radio" name="q6" value="d" id="desktop-apps6" onChange={handleAnswerData} />
            <label htmlFor="desktop-apps6">C, C++, Java</label>
          </div>
          <div>
            <input type="radio" name="q6" value="e" id="other6" onChange={handleAnswerData} />
            <label htmlFor="other6">None of the above</label>
          </div>
        </div>
        {/* question 7 - written */}
        <div className="survey-form-item">
          <label>
            Question 7: What is your long-term career goal in programming?
          </label>
          <div>
            <input type="radio" name="q7" value="a" id="websites7" onChange={handleAnswerData} />
            <label htmlFor="websites7">Freelance or contract work</label>
          </div>
          <div>
            <input type="radio" name="q7" value="e" id="other7" onChange={handleAnswerData} />
            <label htmlFor="other7">Research and academia</label>
          </div>
          <div>
            <input type="radio" name="q7" value="b" id="phone-apps7" onChange={handleAnswerData} />
            <label htmlFor="phone-apps7">Starting my own tech startup</label>
          </div>
          <div>
            <input type="radio" name="q7" value="d" id="desktop-apps7" onChange={handleAnswerData} />
            <label htmlFor="desktop-apps7">Full-time employment at a tech company</label>
          </div>
          <div>
            <input type="radio" name="q7" value="c" id="video-games7" onChange={handleAnswerData} />
            <label htmlFor="video-games7">Other</label>
          </div>
        </div>
        {/* question 8 - written */}
        <div className="survey-form-item">
          <label>
            Question 8: How much time are you willing to dedicate to learning programming each week?
          </label>
          <div>
            <input type="radio" name="q8" value="e" id="other8" onChange={handleAnswerData} />
            <label htmlFor="other8">Less than 3 hours</label>
          </div>
          <div>
            <input type="radio" name="q8" value="b" id="phone-apps8" onChange={handleAnswerData} />
            <label htmlFor="phone-apps8">3-10 hours</label>
          </div>
          <div>
            <input type="radio" name="q8" value="d" id="desktop-apps8" onChange={handleAnswerData} />
            <label htmlFor="desktop-apps8">10-15 hours</label>
          </div>
          <div>
            <input type="radio" name="q8" value="a" id="websites8" onChange={handleAnswerData} />
            <label htmlFor="websites8">15-20 hours</label>
          </div>
          <div>
            <input type="radio" name="q8" value="c" id="video-games8" onChange={handleAnswerData} />
            <label htmlFor="video-games8">More than 20 hours</label>
          </div>
        </div>
        {/* question 9 - written */}
        <div className="survey-form-item">
          <label>
            Question 9: What factor is most important to you when choosing a programming language?
          </label>
          <div>
            <input type="radio" name="q9" value="e" id="other9" onChange={handleAnswerData} />
            <label htmlFor="other9">Ease of learning</label>
          </div>
          <div>
            <input type="radio" name="q9" value="d" id="desktop-apps9" onChange={handleAnswerData} />
            <label htmlFor="desktop-apps9">Job opportunities and demand</label>
          </div>
          <div>
            <input type="radio" name="q9" value="b" id="phone-apps9" onChange={handleAnswerData} />
            <label htmlFor="phone-apps9">Performance and speed</label>
          </div>
          <div>
            <input type="radio" name="q9" value="a" id="websites9" onChange={handleAnswerData} />
            <label htmlFor="websites9">Flexibility and versatility</label>
          </div>
          <div>
            <input type="radio" name="q9" value="c" id="video-games9" onChange={handleAnswerData} />
            <label htmlFor="video-games9">Community and resources</label>
          </div>
        </div>
        {/* submit button */}
        <Confetti className='confetti' active={confetti} config={config} />
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
      {/* results */}
      <h2>After pressing submit, the results of the survey will be displayed below.</h2>
      {language === 'Web Development' && (
        <div className='results-container'>
          <p>Based on your answers, you should learn web development!</p>
          <p>This includes HTML, CSS, JavaScript, and once you're more advanced, React.</p>
          <p>If you're a complete beginner to web develpment, you should start learning each of the provided languages in this order: HTML - CSS - JavaScript - React</p>
          <p>Below are links to all respective courses.</p>
          <LinkButton btnLink='/curriculum/html' btnText='Go to HTML Course' />
          <LinkButton btnLink='/curriculum/css' btnText='Go to CSS Course' />
          <LinkButton btnLink='/curriculum/javascript' btnText='Go to JavaScript Course' />
          <LinkButton btnLink='/curriculum/react' btnText='Go to React Course' />
          <p>If you're interesed in the servers (backend) portion of web development, consider checking out these courses below.</p>
          <LinkButton btnLink='/curriculum/sql' btnText='Go to SQL Course' />
          <LinkButton btnLink='/curriculum/php' btnText='Go to PHP Course' />
          <LinkButton btnLink='/curriculum/ruby' btnText='Go to Ruby Course' />
        </div>
      )}
      {language === 'Native App Development' && (
        <div className='results-container'>
          <p>Based on your answers, you should learn native app development!</p>
          <p>If you're interested in Android apps, you should learn Kotlin.</p>
          <p>If you're interested in Apple apps, you should learn Swift.</p>
          <LinkButton btnLink='/curriculum/kotlin' btnText='Go to Kotlin Course' />
          <LinkButton btnLink='/curriculum/swift' btnText='Go to Swift Course' />
        </div>
      )}
      {language === 'Video Games' && (
        <div className='results-container'>
          <p>Based on your answers, you should learn video game development!</p>
          <p>Unity is a great game engine for beginners and is used by many game developers.</p>
          <p>C# is the language used in Unity, so you should learn that as well.</p>
          <LinkButton btnLink='/curriculum/unity' btnText='Go to Unity Course' />
        </div>
      )}
      {language === 'Enterprise Level Apps' && (
        <div className='results-container'>
          <p>Based on your answers, you should learn enterprise level app development!</p>
          <p>C++ and Java are great languages for building large-scale applications.</p>
          <LinkButton btnLink='/curriculum/c++' btnText='Go to C/C++ Course' />
          <LinkButton btnLink='/curriculum/java' btnText='Go to Java Course' />
        </div>
      )}
      {language === 'Other/Data Science and Machine Learning' && (
        <div className='results-container'>
          <p>Based on your answers, you should learn Python, as it's a great universal language and simple to learn.</p>
          <p>It's also great for data science and machine learning.</p>
          <LinkButton btnLink='/curriculum/python' btnText='Go to Python Course' />
        </div>
      )}
    </div>
  )
}

