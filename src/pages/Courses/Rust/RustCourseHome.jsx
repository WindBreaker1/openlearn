import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRust } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RustCourseHome = () => {
  document.title = 'Rust Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const rustLessons = response.data
          .filter(lesson => lesson.language === 'Rust')
          .sort((a, b) => a.order - b.order);
        setLessons(rustLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faRust} style={{color: "#5f6167",}} /> Welcome to the Rust course!</h1>
      <p>
        Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. It is a language suitable for systems programming, game development, and other performance-critical tasks.
      </p>
      <p>
        Rust is syntactically similar to C++, but it provides increased speed and better memory safety. It is a modern language that is designed to be memory-safe, concurrent, and fast.
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
            <td><a href="https://youtu.be/zF34dRivLOw?si=4FkvgzqEwbR1qD0I" target="_blank" rel="noopener noreferrer">Rust Crash Course By Traversy Media</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default RustCourseHome;