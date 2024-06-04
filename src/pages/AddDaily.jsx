import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

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
      <h1>Add Daily Exercise</h1>
      <p>Use this form to add a new daily exercise.</p>
      <p>If you want to see your created exercises go <Link to='/admin-daily'>here</Link>.</p>
      <form className='general-survey-form' onSubmit={handleSubmit}>
        <label>Question Text: </label>
        <textarea
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder='Question...'
        />
        <label>User Input Type:</label>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder='Input...' />
        <label>Answer:</label>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}  placeholder='Answer...' />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}