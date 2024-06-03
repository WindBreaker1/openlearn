import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const PythonCourseHome = () => {
  document.title = 'Python Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faPython} style={{color: "#ddd72c",}} /> Welcome to the Python course!</h1>
      <p>
        Python is a high-level, interpreted programming language known for its readability and simplicity. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
      </p>
      <p>
        Python is widely used in various domains such as web development, data analysis, machine learning, artificial intelligence, scientific computing, and more. Its extensive standard library and rich ecosystem of third-party packages make it a versatile language for many types of projects.
      </p>
      <p>
        We currently don't have any lessons for this course, but the resources below should be more than enough to get you from beginner to expert!
      </p>
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
            <td><a href="https://youtu.be/XKHEtdqhLK8?si=5KDq8wyXysWVizml" target="_blank" rel="noopener noreferrer">12 Hour Python Course By Bro Code</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default PythonCourseHome