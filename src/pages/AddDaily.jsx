import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardQuestion, faExpand, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"

export default function AddDaily() {
  const [questionText, setQuestionText] = useState('');
  const [language, setLanguage] = useState('');
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/addDailyExercise', { questionText, language, userInput, answer });
      toast.success('Daily exercise added successfully!');
      setQuestionText('');
      setLanguage('');
      setUserInput('');
      setAnswer('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='page center-page'>
      <h1><FontAwesomeIcon icon={faClipboardQuestion} /> Add Daily Exercise</h1>
      <p>Use this form to add a new daily exercise.</p>
      <Link to='/admin-daily'><button><FontAwesomeIcon icon={faExpand} /> See All Exercises</button></Link>
      <br />
      <form className='general-survey-form' onSubmit={handleSubmit}>
        <label>Question Text: </label>
        <textarea
          style={{ width: '550px', height: '100px' }} 
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder='Question...'
        />
        <label>Language/Framework:</label>
        <select id="language" name="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
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
        <label>User Input Type:</label>
        <select name="input" id="input" value={userInput} onChange={(e) => setUserInput(e.target.value)}>
          <option value="" disabled>Select an Input Form</option>
          <option value="Text">Text</option>
        </select>
        <label>Answer:</label>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}  placeholder='Answer...' />
        <button type="submit"><FontAwesomeIcon icon={faArrowRightToBracket} /> Submit</button>
      </form>
    </div>
  );
}