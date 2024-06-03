import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwift } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SwiftCourseHome = () => {
  document.title = 'Swift Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faSwift} style={{color: "#ed811d",}} /> Welcome to the Swift course!</h1>
      <p>
        Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.
      </p>
      <p>
        It's known for its safety features, speed, and modern syntax, making it easier to read and write. Swift also supports inferred types to make code cleaner and less prone to mistakes, and modules eliminate headers and provide namespaces.
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
            <td><a href="https://youtu.be/CwA1VWP0Ldw?si=uBlj-KEqhYlRIqXG" target="_blank" rel="noopener noreferrer">10 Hour Swift Programming Course By Sean Allen</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default SwiftCourseHome;