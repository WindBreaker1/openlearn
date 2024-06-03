import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const JavaScriptCourseHome = () => {
  document.title = 'JavaScript Course';
  
  return (
    <div className='page'>
      {/* introduction */}
      <h1><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} /> Welcome to the JavaScript course!</h1>
      <p>
        JavaScript is a high-level, interpreted programming language primarily used for enhancing web pages to provide for a more user interactive experience. It allows for dynamic interactivity on websites when applied to an HTML document.
      </p>
      <p>
        JavaScript supports multiple programming paradigms including procedural, object-oriented, and functional programming. It's known for its usage in web frameworks like React, Angular, and Vue.js.
      </p>
      <p>
        This course will help you learn everything you need to become
        a JavaScript master!
      </p>
      <p>
        It includes projects and exercises where you will learn how to 
        manipulate the DOM, use object-oriented programming principles, 
        and fetch real-world data using APIs.
      </p>
      {/* list of lessons */}
      <h2>Lessons</h2>
      <table>
        <thead>
          <tr>
            <th>Lesson</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lesson 1</td>
            <td><Link to='/curriculum/javascript/lesson-1'>Introduction to JavaScript</Link></td>
          </tr>
          <tr>
            <td>Lesson 2</td>
            <td><Link to='/curriculum/javascript/lesson-2'>Function Basics</Link></td>
          </tr>
          <tr>
            <td>Lesson 3</td>
            <td><Link to='/curriculum/javascript/lesson-3'>Loop and Arrays</Link></td>
          </tr>
          <tr>
            <td>Lesson 4</td>
            <td><Link to='/curriculum/javascript/lesson-4'>Manipulating the DOM</Link></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default JavaScriptCourseHome;