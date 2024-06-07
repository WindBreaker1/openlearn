import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HtmlCourseHome = () => {
  document.title = 'HTML Course';

  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('/getLessons');
        const htmlLessons = response.data
          .filter(lesson => lesson.language === 'HTML')
          .sort((a, b) => a.order - b.order);
        setLessons(htmlLessons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessons();
  }, []);

  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faHtml5} style={{color: "#eb6f0a",}} /> Welcome to the HTML course!</h1>
      <p>
        HTML, short for HyperText Markup Language, is the standard markup language used for creating web pages. It is the backbone of any website and interacts with languages like CSS and JavaScript to create interactive, styled web pages. 
      </p>
      <p>
        HTML structures the content on the web page and uses tags to denote different types of content, such as headings, paragraphs, links, images, and more. It's an essential skill for anyone interested in web development.
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
            <td><a href="https://youtu.be/kUMe1FH4CHE?si=N8QPcO0AA61p6Tp9" target="_blank" rel="noopener noreferrer">4 Hour HTML Course For Beginners</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  );
};

export default HtmlCourseHome;