import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const ReactCourseHome = () => {
  document.title = 'React Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faReact} style={{color: "#0091ff",}} /> Welcome to the React course!</h1>
      <p>
        React is a popular JavaScript library for building user interfaces, primarily for single-page applications. It's used for handling the view layer in web and mobile apps. React allows developers to create large web applications that can update and render efficiently in response to data changes.
      </p>
      <p>
        It's known for its component-based architecture, virtual DOM, and efficient diffing algorithm for fast rendering. React was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.
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
            <td><a href="https://youtu.be/XxXyfkrP298?si=E7x876nuRWLR06Iz" target="_blank" rel="noopener noreferrer">Build 4 Modern React Apps</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default ReactCourseHome;