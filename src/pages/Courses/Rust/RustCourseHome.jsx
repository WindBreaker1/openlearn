import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRust } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const RustCourseHome = () => {
  document.title = 'Rust Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faRust} style={{color: "#5f6167",}} /> Welcome to the Rust course!</h1>
      <p>
        Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. It is a language suitable for systems programming, game development, and other performance-critical tasks.
      </p>
      <p>
        Rust is syntactically similar to C++, but it provides increased speed and better memory safety. It is a modern language that is designed to be memory-safe, concurrent, and fast.
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
            <td><a href="https://youtu.be/zF34dRivLOw?si=4FkvgzqEwbR1qD0I" target="_blank" rel="noopener noreferrer">Rust Crash Course By Traversy Media</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default RustCourseHome;