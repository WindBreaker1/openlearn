import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardQuestion, faExpand, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"

export default function AddDaily() {
  const [questionText, setQuestionText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/addDailyExercise', { questionText, userInput, answer });
      toast.success('Daily exercise added successfully!');
      setQuestionText('');
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
        <label>User Input Type:</label>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder='Input...' />
        <label>Answer:</label>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}  placeholder='Answer...' />
        <button type="submit"><FontAwesomeIcon icon={faArrowRightToBracket} /> Submit</button>
      </form>
    </div>
  );
}