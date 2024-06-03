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

export default function JSLesson2() {
  document.title = 'JavaScript Lesson 2';

  const { user } = useContext(UserContext);

  const codeString1 = `function favoriteAnimal(animal) {\n  return animal + " is my favorite animal!"\n}\nconsole.log(favoriteAnimal('Goat'))`;

  
  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} /> Function Basics</h1>
      <h2>Introduction</h2>
      <p>
      Things are about to get really exciting. So far you have been writing an impressive amount of code to solve various problems, but that code has not been as useful as it could be.
      </p>
      <p>
      Imagine taking one of your scripts and bundling it into a little package that you could use over and over again without having to rewrite or change the code. That’s the power of functions, and they’re used constantly in JavaScript.
      </p>
      <h2>Examples</h2>
      <p>
      Let’s discuss parameters and arguments in the context of the following example function:
      </p>
      <SyntaxHighlighter language="js" style={darcula} showLineNumbers={true} children={codeString1} />
      <p>
      In this function, the parameter is <span className="inline-code">animal</span>, and the argument is <span className="inline-code">'Goat'</span>. The function will return <span className="inline-code">'Goat is my favorite animal!'</span>.
      </p>
      <p>
      The parameter is the variable that is used in the function declaration, and the argument is the value that is passed to the function when it is called.
      </p>
      <p>
      Keep this possibility in mind because you’ll be passing in function calls as arguments somewhat often. If we just called the function without <span className="inline-code">console.log</span>-ging what it returns, nothing would appear in the console but nonetheless the function would return that string.
      </p>
      <p>
      You can pass multiple arguments to a function, and you can also return a value from a function using the <span className="inline-code">return</span> keyword.
      </p>
      <p>
      Functions are a powerful tool in JavaScript, and you will use them often in your code. They allow you to write reusable code that can be called multiple times with different arguments.
      </p>
      <p>
      Next, read the <a href="https://javascript.info/function-expressions" target="_blank" rel="noopener noreferrer">function expressions</a> article about functions in JavaScript to give you a little more context, and read the article on <a href="https://javascript.info/arrow-functions-basics" target="_blank" rel="noopener noreferrer">arrow functions</a> for an introduction to arrow functions. Arrow functions are useful but not crucial, so don’t worry about them too much just yet. We include them here because you are likely to encounter them as you move forward, and it’s better that you have at least some idea of what you’re looking at whenever they crop up.
      </p>
      <h2>Exercises</h2>
      <ol>
        <li>Write a function that takes in a number and returns the number multiplied by 2.</li>
        <li>Write a function that takes in a string and returns the string repeated 3 times.</li>
        <li>Write a function that takes in a string and returns the string with the first letter capitalized.</li>
        <li>Write a function that takes in a string and returns the string with the first letter capitalized and the rest of the string in lowercase.</li>
        <li>Write a function that takes in a string and returns the string with the first letter capitalized and the rest of the string in lowercase, but only if the string is longer than 5 characters.</li>
      </ol>
      <div className='button-container'>
        <LinkButton btnLink='/curriculum/javascript' btnText='View Course' />
        {user ? <ExpButton /> : <Link to='/register'><button>Register to Track Progress</button></Link>}
        <LinkButton btnLink='/curriculum/javascript/lesson-3' btnText='Next Lesson' />
      </div>
    </div>
  )
}
