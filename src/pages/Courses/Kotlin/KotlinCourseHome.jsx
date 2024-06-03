import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKorvue } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const KotlinCourseHome = () => {
  document.title = 'Kotlin Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faKorvue} style={{color: "#c77ee2",}} /> Welcome to the Kotlin course!</h1>
      <p>
        Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to be fully interoperable with Java, and the JVM version of its standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.
      </p>
      <p>
        Kotlin is officially supported by Google as a first-class language for Android development, and it's also used for server-side development, web development, and desktop development.
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
            <td><a href="https://youtu.be/EExSSotojVI?si=rWJhmled9DpmKRXt" target="_blank" rel="noopener noreferrer">13 Hour Kotlin Course For Beginners</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default KotlinCourseHome;