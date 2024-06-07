import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PythonCourseHome = () => {
  document.title = 'Python Course';
  
  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const pyLessons = response.data
          .filter(lesson => lesson.language === 'Python')
          .sort((a, b) => a.order - b.order);
        setLessons(pyLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);

  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faPython} style={{color: "#ddd72c",}} /> Welcome to the Python course!</h1>
      <p>
        Python is a high-level, interpreted programming language known for its readability and simplicity. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
      </p>
      <p>
        Python is widely used in various domains such as web development, data analysis, machine learning, artificial intelligence, scientific computing, and more. Its extensive standard library and rich ecosystem of third-party packages make it a versatile language for many types of projects.
      </p>
      <h2>Lessons</h2>
      <table>
        <thead>
          <tr>
            <th>Lesson</th>
            <th>Title</th>
            <th>Author</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr key={lesson._id}>
              <td>{lesson.order}</td>
              <td><Link to={`/lessons/${lesson._id}`}>{lesson.title}</Link></td>
              <td>{lesson.author}</td>
              <td>{lesson.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Resources</h2>
      <table>
        <thead>
          <tr>
            <th>Resource</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Video Resource</td>
            <td><a href="https://youtu.be/XKHEtdqhLK8?si=5KDq8wyXysWVizml" target="_blank" rel="noopener noreferrer">12 Hour Python Course By Bro Code</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default PythonCourseHome