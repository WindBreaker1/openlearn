import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhpCourseHome = () => {
  document.title = 'PHP Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const phpLessons = response.data
          .filter(lesson => lesson.language === 'PHP')
          .sort((a, b) => a.order - b.order);
        setLessons(phpLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faPhp} style={{color: "#5372d0",}} /> Welcome to the PHP course!</h1>
      <p>
        PHP (Hypertext Preprocessor) is a popular general-purpose scripting language that is especially suited to web development. PHP code is executed on the server, and the result is returned to the browser as plain HTML.
      </p>
      <p>
        It's widely used for creating dynamic web pages and applications, and it can be embedded directly into HTML code. PHP can also interact with many different database languages including MySQL.
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
            <td><a href="https://youtu.be/fw5ObX8P6as?si=hL_cAmDR99mBAIv2" target="_blank" rel="noopener noreferrer">PHP For Beginners Course</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default PhpCourseHome;