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

export default function JSLesson4() {
  document.title = 'JavaScript Lesson 4';

  const { user } = useContext(UserContext);

  const codeString1 = `<div id="container">\n  <div class="display"></div>\n  <div class="controls"></div>\n</div>`;
  const codeString2 = `const div = document.createElement("div");`;
  const codeString3 = `const btn = document.querySelector("#btn");\nbtn.addEventListener("click", () => {\n   alert("Hello World");\n});`

  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} /> Manipulating the DOM</h1>
      <p>
      One of the most unique and useful abilities of JavaScript is its ability to manipulate the DOM. But what is the DOM, and how do we go about changing it? Let’s jump right in…
      </p>
      <p>
      The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.
      </p>
      <SyntaxHighlighter language="html" style={darcula} showLineNumbers={true} children={codeString1} />
      <p>Think of the code above like a family tree. <span className="inline-code">{`<div id="container"></div>`}</span> is a parent, with its children on the next level, each on their own “branch”.</p>
      <h3>DOM methods</h3>
      <p>
      When your HTML code is parsed by a web browser, it is converted to the DOM, as was mentioned above. One of the primary differences is that these nodes are JavaScript objects that have many properties and methods attached to them. These properties and methods are the primary tools we are going to use to manipulate our webpage with JavaScript. We’ll start with the query selectors - those that help you target nodes.
      </p>
      <h2>Query Selectors</h2>
      <p>
      Query selectors are methods that allow you to select elements from the DOM. They are used to manipulate the DOM and are very powerful tools. Here are some of the most common query selectors:
      </p>
      <ul>
        <li><span className="inline-code">document.querySelector()</span> - selects the first element that matches a specified CSS selector.</li>
        <li><span className="inline-code">document.querySelectorAll()</span> - selects all elements that match a specified CSS selector.</li>
        <li><span className="inline-code">document.getElementById()</span> - selects an element by its id.</li>
        <li><span className="inline-code">document.getElementsByClassName()</span> - selects all elements with a specific class name.</li>
        <li><span className="inline-code">document.getElementsByTagName()</span> - selects all elements with a specific tag name.</li>
      </ul>
      <p>
      It’s important to remember that when using querySelectorAll, the return value is not an array. It looks like an array, and it somewhat acts like an array, but it’s really a “NodeList”. The big distinction is that several array methods are missing from NodeLists. One solution, if problems arise, is to convert the NodeList into an array.
      </p>
      <h2>Element creation</h2>
      <SyntaxHighlighter language="js" style={darcula} showLineNumbers={true} children={codeString2} />
      <p>
      This function does NOT put your new element into the DOM - it creates it in memory. This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before placing it on the page. You can place the element into the DOM with one of the following methods.
      </p>
      <h3>Events</h3>
      <p>
      Now that we have a handle on manipulating the DOM with JavaScript, the next step is learning how to make that happen dynamically or on demand! Events are how you make that magic happen on your pages. Events are actions that occur on your webpage, such as mouse-clicks or key-presses. Using JavaScript, we can make our webpage listen to and react to these events.
      </p>
      <p>
      There are many methods to add events to your webpage, but the most common is the <span className="inline-code">addEventListener()</span> method. This method allows you to add an event listener to an element, which will then listen for a specific event to occur.
      </p>
      <SyntaxHighlighter language="js" style={darcula} showLineNumbers={true} children={codeString3} />
      <p>
      You can find a more complete list with explanations of each event on the <a href="https://www.w3schools.com/jsref/dom_obj_event.asp" target="_blank" rel="noopener noreferrer">W3Schools JavaScript Event Reference</a> page.
      </p>
      <h2>Exercises</h2>
      <ol>
        <li>Create a new div element and append it to the body of your HTML document.</li>
        <li>Change the background color of the div element you just created.</li>
        <li>Create a button element and add an event listener to it that will display an alert when clicked.</li>
      </ol>
      <div className='button-container'>
        <LinkButton btnLink='/curriculum/javascript' btnText='View Course' />
        {user ? <ExpButton /> : <Link to='/register'><button>Register to Track Progress</button></Link>}
        <LinkButton btnLink='/curriculum/javascript' btnText='Next Lesson' />
      </div>
    </div>
  )
}
