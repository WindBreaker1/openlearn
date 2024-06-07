import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

const CAndCPlusPlusCourseHome = () => {
  document.title = 'C & C++ Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const CLessons = response.data
          .filter(lesson => lesson.language === 'C/C++')
          .sort((a, b) => a.order - b.order);
        setLessons(CLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faC} style={{color: "#1160e8",}} /> Welcome to the C & C++ course!</h1>
      <p>
        C is a high-level, general-purpose programming language that provides low-level access to memory and is widely used for system programming, including operating system kernels and hardware drivers. It is known for its efficiency and control, while also being the basis for other programming languages, including C++.
      </p>
      <p>
        C++ is an extension of the C language, with enhancements such as classes and objects, making it a key player in the object-oriented programming (OOP) world. It's commonly used for system/software development, game development, and in other high-performance scenarios. It offers a combination of high-level and low-level language features.
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
            <td><a href="https://youtu.be/KJgsSFOSQv0?si=0MitcsWGM6IZU8TK" target="_blank" rel="noopener noreferrer">C Programming Course for Beginners</a></td>
          </tr>
          <tr>
            <td>Video Resource</td>
            <td><a href="https://youtu.be/ZzaPdXTrSb8?si=VtQC0riEG6xnYXbc" target="_blank" rel="noopener noreferrer">1 Hour C++ Introductiry Course</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default CAndCPlusPlusCourseHome;