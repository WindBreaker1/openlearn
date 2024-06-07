import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog } from "@fortawesome/free-solid-svg-icons"
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const OtherCourseHome = () => {
  document.title = 'Other Courses';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const otherLessons = response.data
          .filter(lesson => lesson.language === 'Other')
          .sort((a, b) => a.order - b.order);
        setLessons(otherLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);

  return (
    <div className='page'>
      {/* introduction */}
      <h1><FontAwesomeIcon icon={faBlog} /> Welcome to our other lessons!</h1>
      <p>
        This section contains courses that don't fit into the other categories. They are a mix of different topics and languages, so feel free to explore and learn something new!
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

export default OtherCourseHome;