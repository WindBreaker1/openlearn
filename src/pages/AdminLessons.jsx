import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export default function AdminLessons() {
  const { lessons, setLessons } = useContext(UserContext);

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
      <h1>Admin Lessons</h1>
      <p>Here are the lessons made by the admin.</p>
      <Link to='/add-lesson'><button>Add New Lesson</button></Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Language</th>
            <th>Order in Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {lessons.map((lesson) => (
          <tr key={lesson._id}>
            <td><Link to={`/lessons/${lesson._id}`}>{lesson.title}</Link></td>
            <td>{lesson.author}</td>
            <td>{lesson.language}</td>
            <td>{lesson.order}</td>
            <td className='button-container-no-margin'>
              <Link to={`/update-lesson/${lesson._id}`}><button className='update-button'>Update</button></Link>
              <button className='delete-button' onClick={() => deleteLesson(lesson._id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
