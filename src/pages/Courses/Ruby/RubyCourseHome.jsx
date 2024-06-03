import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

const RubyCourseHome = () => {
  document.title = 'Ruby Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faGem} style={{color: "#e70d23",}} /> Welcome to the Ruby course!</h1>
      <p>
        Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
      </p>
      <p>
        Ruby is a high-level programming language that is most commonly used for web development. It is known for its simplicity and flexibility, making it a great language for beginners to learn.
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
            <td><a href="https://youtu.be/t_ispmWmdjY?si=cfw__rEyxtogDZ3Z" target="_blank" rel="noopener noreferrer">Ruby Programming Language - Full Course</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default RubyCourseHome;