import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnity } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UnityCourseHome = () => {
  document.title = 'Unity & C# Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const unityLessons = response.data
          .filter(lesson => lesson.language === 'Unity/C#')
          .sort((a, b) => a.order - b.order);
        setLessons(unityLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faUnity} style={{color: "#4f589c",}} /> Welcome to the Unity & C# course!</h1>
      <p>
        Unity is a powerful cross-platform game development engine used to create 2D and 3D video games as well as non-game interactive simulations and visualizations. It provides a robust and intuitive environment for game development, with capabilities for rendering, physics, animation, scripting, and more.
      </p>
      <p>
        C# (C-Sharp) is a modern, object-oriented programming language developed by Microsoft. It's the primary language used in Unity game development. C# in Unity is used to define game behavior, including character actions, enemy AI, and more. It's known for its strong type system, automatic memory management, and extensive class libraries.
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
            <td><a href="https://www.youtube.com/playlist?list=PLQMQNmwN3FvyRruvfH93H63X9nqKOplXc" target="_blank" rel="noopener noreferrer">Unity C# Fundamentals</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default UnityCourseHome;