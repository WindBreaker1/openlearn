import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export default function AdminDaily() {
  const { exercises, setExercises } = useContext(UserContext);

  const deleteExercise = async (id) => {
    try {
      await axios.delete(`/deleteDailyExercise/${id}`);
      setExercises(exercises.filter((exercise) => exercise._id !== id));
      toast.success('Exercise deleted successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete exercise.');
    }
  };

  // ...

return (
  <div className='page center-page'>
    <h1>List of Created Exercises</h1>
    <p>This is a list of your created exercises.</p>
    <p>If you want to add a new one go <Link to='/add-daily'>here</Link>.</p>
    <table>
      <thead>
        <tr>
          <th>Question</th>
          <th>Input Type</th>
          <th>Answer</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise) => (
          <tr key={exercise._id}>
            <td>{exercise.questionText}</td>
            <td>{exercise.userInput}</td>
            <td>{exercise.answer}</td>
            <td>
              <button className='delete-button' onClick={() => deleteExercise(exercise._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ...
};
