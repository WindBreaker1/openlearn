import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

const SqlCourseHome = () => {
  document.title = 'Sql Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faDatabase} style={{color: "#879ec4",}} /> Welcome to the SQL course!</h1>
      <p>
        SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It can be used to perform tasks such as querying data, inserting rows, updating rows, deleting rows, creating and modifying tables, views, procedures, etc.
      </p>
      <p>
        SQL is widely used in both industry and academia, often for large and complex databases. It's supported by many relational database systems like MySQL, Oracle, SQL Server, and SQLite.
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
            <td><a href="https://youtu.be/h0nxCDiD-zg?si=theu7qZLCPhTrrPm" target="_blank" rel="noopener noreferrer">SQL Tutorial For Beginners</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default SqlCourseHome;