import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const CssCourseHome = () => {
  document.title = 'CSS Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faCss3Alt} style={{color: "#74C0FC",}} /> Welcome to the CSS course!</h1>
      <p>
        CSS, which stands for Cascading Style Sheets, is a style sheet language used for describing the look and formatting of a document written in HTML or XML. It is one of the cornerstone technologies of the web, alongside HTML and JavaScript.
      </p>
      <p>
        CSS is used to control layout of web pages, including colors, fonts, and the design of the overall webpage. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.
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
            <td><a href="https://youtu.be/wRNinF7YQqQ?si=4FkvgzqEwbR1qD0I" target="_blank" rel="noopener noreferrer">1 Hour CSS Course By Bro Code</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default CssCourseHome;