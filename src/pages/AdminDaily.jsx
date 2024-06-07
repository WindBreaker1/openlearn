import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList, faPlus, faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

export default function AdminDaily() {
  const { exercises, setExercises } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');

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

return (
  <div className='page center-page'>
    <h1><FontAwesomeIcon icon={faTableList} /> List of Created Exercises</h1>
    <p>This is a list of your created exercises.</p>
    <input style={{width: '500px'}} type="text" placeholder="Search Exercises..." onChange={event => setSearchTerm(event.target.value)} />
    <br />
    <Link to='/add-daily'><button><FontAwesomeIcon icon={faPlus} /> Add New Exercise</button></Link>
    <table className='wide-table'>
      <thead>
        <tr>
          <th>Question</th>
          <th>Language</th>
          <th>Input Type</th>
          <th>Answer</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {exercises.filter(exercise => exercise.questionTitle.toLowerCase().includes(searchTerm.toLowerCase())).map((exercise) => (
          <tr key={exercise._id}>
            <td>{exercise.questionTitle}</td>
            <td>{exercise.language}</td>
            <td>{exercise.userInput}</td>
            <td>{exercise.answer}</td>
            <td className='button-container-no-margin'>
              <Link to={`/update-daily/${exercise._id}`}><button className='update-button'> Update</button></Link>
              <div>
                <button className='delete-button' onClick={() => deleteExercise(exercise._id)}> Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};
