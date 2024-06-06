import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonChalkboard, faPlus, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"

export default function AdminLessons() {
  const { lessons, setLessons } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');

  const deleteLesson = async (id) => {
  try {
    await axios.delete(`/deleteLesson/${id}`);
    setLessons(lessons.filter((lesson) => lesson._id !== id));
    toast.success('Lesson deleted successfully');
  } catch (error) {
    toast.error('Failed to delete lesson');
  }
};

  return (
    <div className='page center-page'>
      <h1><FontAwesomeIcon icon={faPersonChalkboard} /> Admin Lessons</h1>
      <p>Here are the lessons made by the admin.</p>
      <input style={{width: '500px'}} type="text" placeholder="Search Lessons..." onChange={event => setSearchTerm(event.target.value)} />
      <br />
      <Link to='/add-lesson'><button><FontAwesomeIcon icon={faPlus} /> Add New Lesson</button></Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Language</th>
            <th>Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lessons.filter(lesson => lesson.title.toLowerCase().includes(searchTerm.toLowerCase())).map((lesson) => (
            <tr key={lesson._id}>
              <td><Link to={`/lessons/${lesson._id}`}>{lesson.title}</Link></td>
              <td>{lesson.author}</td>
              <td>{lesson.language}</td>
              <td>{lesson.order}</td>
              <td className='button-container-no-margin'>
                <Link to={`/update-lesson/${lesson._id}`}><button className='update-button'><FontAwesomeIcon icon={faPenToSquare} /> Update</button></Link>
                <div>
                  <button className='delete-button' onClick={() => deleteLesson(lesson._id)}> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
