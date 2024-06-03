import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnity } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const UnityCourseHome = () => {
  document.title = 'Unity & C# Course';
  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faUnity} style={{color: "#4f589c",}} /> Welcome to the Unity & C# course!</h1>
      <p>
        Unity is a powerful cross-platform game development engine used to create 2D and 3D video games as well as non-game interactive simulations and visualizations. It provides a robust and intuitive environment for game development, with capabilities for rendering, physics, animation, scripting, and more.
      </p>
      <p>
        C# (C-Sharp) is a modern, object-oriented programming language developed by Microsoft. It's the primary language used in Unity game development. C# in Unity is used to define game behavior, including character actions, enemy AI, and more. It's known for its strong type system, automatic memory management, and extensive class libraries.
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
            <td><a href="https://www.youtube.com/playlist?list=PLQMQNmwN3FvyRruvfH93H63X9nqKOplXc" target="_blank" rel="noopener noreferrer">Unity C# Fundamentals</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to='/curriculum'><button>Back to Curriculum</button></Link>
      </div>
    </div>
  )
}

export default UnityCourseHome;