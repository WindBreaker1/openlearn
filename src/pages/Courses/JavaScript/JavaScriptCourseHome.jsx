import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const JavaScriptCourseHome = () => {
  document.title = 'JavaScript Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const jsLessons = response.data
          .filter(lesson => lesson.language === 'JavaScript')
          .sort((a, b) => a.order - b.order);
        setLessons(jsLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);

  return (
    <div className='page'>
      {/* introduction */}
      <h1><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} /> Welcome to the JavaScript course!</h1>
      <p>
        JavaScript is a high-level, interpreted programming language primarily used for enhancing web pages to provide for a more user interactive experience. It allows for dynamic interactivity on websites when applied to an HTML document.
      </p>
      <p>
        JavaScript supports multiple programming paradigms including procedural, object-oriented, and functional programming. It's known for its usage in web frameworks like React, Angular, and Vue.js.
      </p>
      <p>
        This course will help you learn everything you need to become
        a JavaScript master!
      </p>
      <p>
        It includes projects and exercises where you will learn how to 
        manipulate the DOM, use object-oriented programming principles, 
        and fetch real-world data using APIs.
      </p>
      {/* list of lessons */}
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
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default JavaScriptCourseHome;