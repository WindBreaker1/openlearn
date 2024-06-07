import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKorvue } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KotlinCourseHome = () => {
  document.title = 'Kotlin Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const kotlinLessons = response.data
          .filter(lesson => lesson.language === 'Kotlin')
          .sort((a, b) => a.order - b.order);
        setLessons(kotlinLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faKorvue} style={{color: "#c77ee2",}} /> Welcome to the Kotlin course!</h1>
      <p>
        Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to be fully interoperable with Java, and the JVM version of its standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.
      </p>
      <p>
        Kotlin is officially supported by Google as a first-class language for Android development, and it's also used for server-side development, web development, and desktop development.
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
            <td><a href="https://youtu.be/EExSSotojVI?si=rWJhmled9DpmKRXt" target="_blank" rel="noopener noreferrer">13 Hour Kotlin Course For Beginners</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default KotlinCourseHome;