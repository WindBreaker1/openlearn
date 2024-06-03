import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const HtmlCourseHome = () => {
  document.title = 'HTML Course';

  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faHtml5} style={{color: "#eb6f0a",}} /> Welcome to the HTML course!</h1>
      <p>
        HTML, short for HyperText Markup Language, is the standard markup language used for creating web pages. It is the backbone of any website and interacts with languages like CSS and JavaScript to create interactive, styled web pages. 
      </p>
      <p>
        HTML structures the content on the web page and uses tags to denote different types of content, such as headings, paragraphs, links, images, and more. It's an essential skill for anyone interested in web development.
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
            <td><a href="https://youtu.be/kUMe1FH4CHE?si=N8QPcO0AA61p6Tp9" target="_blank" rel="noopener noreferrer">4 Hour HTML Course For Beginners</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  );
};

export default HtmlCourseHome;