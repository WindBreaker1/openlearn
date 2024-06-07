import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwift } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SwiftCourseHome = () => {
  document.title = 'Swift Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const swiftLessons = response.data
          .filter(lesson => lesson.language === 'Swift')
          .sort((a, b) => a.order - b.order);
        setLessons(swiftLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faSwift} style={{color: "#ed811d",}} /> Welcome to the Swift course!</h1>
      <p>
        Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.
      </p>
      <p>
        It's known for its safety features, speed, and modern syntax, making it easier to read and write. Swift also supports inferred types to make code cleaner and less prone to mistakes, and modules eliminate headers and provide namespaces.
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
            <td><a href="https://youtu.be/CwA1VWP0Ldw?si=uBlj-KEqhYlRIqXG" target="_blank" rel="noopener noreferrer">10 Hour Swift Programming Course By Sean Allen</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default SwiftCourseHome;