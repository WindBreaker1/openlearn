import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const JavaCourseHome = () => {
  document.title = 'Java Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faJava} style={{color: "#ff622e",}} /> Welcome to the Java course!</h1>
      <p>
        Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.
      </p>
      <p>
        Java is widely used for building enterprise-scale applications, Android apps, web applications, and more. It's known for its robustness, security, and ease of maintenance.
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
            <td><a href="https://youtu.be/xk4_1vDrzzo?si=zJrhtLGLUH3uUNJV" target="_blank" rel="noopener noreferrer">Java 12 Hour Course</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default JavaCourseHome;