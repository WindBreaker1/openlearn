import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReactCourseHome = () => {
  document.title = 'React Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const reactLessons = response.data
          .filter(lesson => lesson.language === 'React')
          .sort((a, b) => a.order - b.order);
        setLessons(reactLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);

  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faReact} style={{color: "#0091ff",}} /> Welcome to the React course!</h1>
      <p>
        React is a popular JavaScript library for building user interfaces, primarily for single-page applications. It's used for handling the view layer in web and mobile apps. React allows developers to create large web applications that can update and render efficiently in response to data changes.
      </p>
      <p>
        It's known for its component-based architecture, virtual DOM, and efficient diffing algorithm for fast rendering. React was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.
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
            <td><a href="https://youtu.be/XxXyfkrP298?si=E7x876nuRWLR06Iz" target="_blank" rel="noopener noreferrer">Build 4 Modern React Apps</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default ReactCourseHome;