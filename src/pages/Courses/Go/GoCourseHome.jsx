import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGolang } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoCourseHome = () => {
  document.title = 'Go Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const goLessons = response.data
          .filter(lesson => lesson.language === 'Go/Golang')
          .sort((a, b) => a.order - b.order);
        setLessons(goLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faGolang} style={{color: "#00ADD8",}} /> Welcome to the Go course!</h1>
      <p>
        Go is a statically typed, compiled programming language designed at Google. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.
      </p>
      <p>
        Go is a great language for writing web servers, command-line tools, and other types of software. It is a simple language that is easy to learn and use, making it a great choice for beginners.
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
            <td><a href="https://youtu.be/jFfo23yIWac?si=tdmhFmUGZS9lXcxV" target="_blank" rel="noopener noreferrer">Learn Go By Building 11 Projects</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default GoCourseHome;