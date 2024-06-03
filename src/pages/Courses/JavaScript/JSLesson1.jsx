// importam syntax highlighter
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// importam user context
import { UserContext } from '../../../../context/userContext';
// importam iconurile
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
// importam butoanele
import ExpButton from '../../../components/ExpButton';
import LinkButton from '../../../components/LinkButton';
// importam link din react-router-dom
import { Link } from 'react-router-dom';
import { useContext } from 'react';

export default function JSLesson1() {
  document.title = 'JavaScript Lesson 1';

  const { user } = useContext(UserContext);

  const codeString1 = `<script src="javascript.js"></script>`;
  const codeString2 = `//declaring variables\nvar x = 1;\nlet y = 2;\nconst z = x + y;\nconsole.log(z); //you can use console.log to print the result in the console`;

  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} /> Introduction to JavaScript</h1>
      <p>
      In this section, we will focus on the fundamentals of JavaScript and how you can use it to manipulate all the various interactions between the web page and user.
      </p>
      <p>
      You can include JavaScript in a webpage through an external script. This is very similar to linking external CSS docs to your website. Create a new file with the extension <span className="inline-code">.js</span> and link it to your HTML file.
      </p>
      <SyntaxHighlighter language="html" style={darcula} showLineNumbers={true} children={codeString1} />
      <p>
      JavaScript files have the extension .js similar to .css for stylesheets. External JavaScript files are used for more complex scripts.
      </p>
      <p>
      If you don't want to work with VsCode yet, you can use the console in your browser to write JavaScript code. Just open the console in any website by pressing <span className="inline-code">F12</span> on your keyboard and type your code there.
      </p>
      <h2>Variables</h2>
      <p>
      You can think of variables as “storage containers” for data in your code. They are used to store information that can be referenced and manipulated in your code.
      </p>
      <p>
      Until recently there was only one way to create a variable in JavaScript — the var statement. But in the newest JavaScript versions we have two more ways — let and const.
      </p>
      <SyntaxHighlighter language="javascript" style={darcula} showLineNumbers={true} children={codeString2} />
      <p>
      A comprehensive guide to JavaScript variables can be found <a href="https://javascript.info/variables" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <h2>Numbers</h2>
      <p>
      Numbers are the building blocks of programming logic! In fact, it’s hard to think of any useful programming task that doesn’t involve at least a little basic math… so knowing how numbers work is obviously quite important. Luckily, it’s also fairly straightforward.
      </p>
      <h2>Exercises</h2>
      <ol>
        <li>Add 2 numbers together! (just type <span className="inline-code">console.log(23 + 97)</span> into your HTML file).</li>
        <li>Add a sequence of 6 different numbers together.</li>
        <li>Print the value of the following expression: <span className="inline-code">(4 + 6 + 9) / 77</span>.</li>
      </ol>
      <div className='button-container'>
        <LinkButton btnLink='/curriculum/javascript' btnText='View Course' />
        {user ? <ExpButton /> : <Link to='/register'><button>Register to Track Progress</button></Link>}
        <LinkButton btnLink='/curriculum/javascript/lesson-2' btnText='Next Lesson' />
      </div>
    </div>
  )
}
