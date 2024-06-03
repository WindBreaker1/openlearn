import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGolang } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const GoCourseHome = () => {
  document.title = 'Go Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faGolang} style={{color: "#00ADD8",}} /> Welcome to the Go course!</h1>
      <p>
        Go is a statically typed, compiled programming language designed at Google. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.
      </p>
      <p>
        Go is a great language for writing web servers, command-line tools, and other types of software. It is a simple language that is easy to learn and use, making it a great choice for beginners.
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
            <td><a href="https://youtu.be/jFfo23yIWac?si=tdmhFmUGZS9lXcxV" target="_blank" rel="noopener noreferrer">Learn Go By Building 11 Projects</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default GoCourseHome;