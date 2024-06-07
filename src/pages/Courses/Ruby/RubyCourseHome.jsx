import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RubyCourseHome = () => {
  document.title = 'Ruby Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const rubyLessons = response.data
          .filter(lesson => lesson.language === 'Ruby')
          .sort((a, b) => a.order - b.order);
        setLessons(rubyLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faGem} style={{color: "#e70d23",}} /> Welcome to the Ruby course!</h1>
      <p>
        Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
      </p>
      <p>
        Ruby is a high-level programming language that is most commonly used for web development. It is known for its simplicity and flexibility, making it a great language for beginners to learn.
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
            <td><a href="https://youtu.be/t_ispmWmdjY?si=cfw__rEyxtogDZ3Z" target="_blank" rel="noopener noreferrer">Ruby Programming Language - Full Course</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default RubyCourseHome;