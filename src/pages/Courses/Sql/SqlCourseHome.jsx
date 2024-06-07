import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SqlCourseHome = () => {
  document.title = 'Sql Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const sqlLessons = response.data
          .filter(lesson => lesson.language === 'SQL')
          .sort((a, b) => a.order - b.order);
        setLessons(sqlLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faDatabase} style={{color: "#879ec4",}} /> Welcome to the SQL course!</h1>
      <p>
        SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It can be used to perform tasks such as querying data, inserting rows, updating rows, deleting rows, creating and modifying tables, views, procedures, etc.
      </p>
      <p>
        SQL is widely used in both industry and academia, often for large and complex databases. It's supported by many relational database systems like MySQL, Oracle, SQL Server, and SQLite.
      </p>
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
            <td><a href="https://youtu.be/h0nxCDiD-zg?si=theu7qZLCPhTrrPm" target="_blank" rel="noopener noreferrer">SQL Tutorial For Beginners</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default SqlCourseHome;