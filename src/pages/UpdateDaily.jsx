import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"

export default function UpdateDaily() {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await axios.get(`/getOneDailyExercise/${id}`);
        setExercise(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExercise();
  }, [id]);

  const updateExercise = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/updateDailyExercise/${exercise._id}`, { questionTitle: e.target.questionTitle.value, questionText: e.target.questionText.value, language: e.target.language.value, userInput: e.target.userInput.value, answer: e.target.answer.value });
      setExercise(response.data);
      toast.success('Exercise updated successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update exercise...');
    }
  };

  if (!exercise) return <div>Loading...</div>;


  return (
    <div className='page center-page'>
      <h1>Edit Exercise: {exercise.questionTitle}</h1>
      <form className='general-survey-form' onSubmit={updateExercise}>
        <label>Question Title:</label>
        <textarea 
          name='questionTitle'
          style={{ width: '550px', height: '30px' }}
          defaultValue={exercise.questionTitle}  
          required
        />
        <label>Question Text: </label>
        <textarea
          name='questionText'
          style={{ width: '550px', height: '250px' }} 
          defaultValue={exercise.questionText}
          required
        />
        <label>Language/Framework:</label>
        <select id="language" name="language" defaultValue={exercise.language}>
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
        <select name="userInput" id="userInput" defaultValue={exercise.userInput}>
          <option value="" disabled>Select an Input Form</option>
          <option value="Text">Text</option>
        </select>
        <label>Answer:</label>
        <input name='answer' id='answer' type="text" defaultValue={exercise.answer} />
        <button type="submit"><FontAwesomeIcon icon={faArrowRightToBracket} /> Submit</button>
      </form>
      <Link to='/admin-daily'><button>Back to Exercises</button></Link>
    </div>
  );
};

