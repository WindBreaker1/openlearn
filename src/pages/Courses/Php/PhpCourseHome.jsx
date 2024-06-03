import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const PhpCourseHome = () => {
  document.title = 'PHP Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faPhp} style={{color: "#5372d0",}} /> Welcome to the PHP course!</h1>
      <p>
        PHP (Hypertext Preprocessor) is a popular general-purpose scripting language that is especially suited to web development. PHP code is executed on the server, and the result is returned to the browser as plain HTML.
      </p>
      <p>
        It's widely used for creating dynamic web pages and applications, and it can be embedded directly into HTML code. PHP can also interact with many different database languages including MySQL.
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
            <td><a href="https://youtu.be/fw5ObX8P6as?si=hL_cAmDR99mBAIv2" target="_blank" rel="noopener noreferrer">PHP For Beginners Course</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default PhpCourseHome;