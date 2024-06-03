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

export default function JSLesson3() {
  document.title = 'JavaScript Lesson 3';

  const { user } = useContext(UserContext);

  const codeString1 = `let animals = ['Cat', 'Dog', 'Elephant', 'Giraffe', 'Lion'];\nconsole.log(animals[0]); // Output: Cat\nconsole.log(animals[2]); // Output: Elephant\nconsole.log(animals.length); // Output: 5\nanimals.push('Zebra');\nconsole.log(animals); // Output: ['Cat', 'Dog', 'Elephant', 'Giraffe', 'Lion', 'Zebra']\nanimals.pop();\nconsole.log(animals); // Output: ['Cat', 'Dog', 'Elephant', 'Giraffe', 'Lion']`;

  return (
    <div className='page'>
      <h1><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} /> Loops and Arrays</h1>
      <p>
      One of the challenges of programming is dealing with large amounts of data. For example, if you want to store the names of all the students in your class, how would you do it? You could create a variable for each name, but that would be tedious and inefficient. It’ll also be hard to manage and update. What if you want to change or access the names later?
      </p>
      <p>
      Luckily, there is a better way to handle this problem. In this lesson, you’ll learn about arrays, which are data structures that can store multiple values in a single variable. Arrays are very useful for organizing and manipulating large amounts of data. You’ll also learn about loops, which are control structures that allow you to execute a block of code repeatedly. Loops are very handy for performing the same operation on each element of an array. Finally, you’ll be introduced to Test-Driven Development (TDD), which is the practice of writing tests for your code before you write the code itself.
      </p>
      <h2>Arrays</h2>
      <p>
      An array is a data structure that can store multiple values in a single variable. Each value in an array is called an element, and each element has a unique index that identifies its position in the array. Arrays are very useful for organizing and manipulating large amounts of data. You can access, modify, and delete elements in an array using their index.
      </p>
      <p>
      <a href="https://www.w3schools.com/js/js_arrays.asp" target="_blank" rel="noopener noreferrer">JavaScript Array Methods</a> covers some of the most useful built-in array methods. These fundamentals are something you’ll use every day, so don’t rush too much and miss out!
      </p>
      <h2>Loops</h2>
      <p>
      A loop is a control structure that allows you to execute a block of code repeatedly. Loops are very handy for performing the same operation on each element of an array. There are several types of loops in JavaScript, but the most common ones are <span className="inline-code">for</span> loops and <span className="inline-code">while</span> loops.
      </p>
      <p>
      Below you have a few examples of how to work with arrays and loops:
      </p>
      <SyntaxHighlighter language="js" style={darcula} showLineNumbers={true} children={codeString1} />
      <h2>Test Driven Development</h2>
      <p>
      Test Driven Development (TDD) is a phrase you often hear in the dev world. It refers to the practice of writing automated tests that describe how your code should work before you actually write the code. For example, if you want to write a function that adds a couple of numbers, you would first write a test that uses the function and supplies the expected output. The test will fail before you write your code, and you should be able to know that your code works correctly when the test passes.
      </p>
      <p>
      In many ways, TDD is much more productive than writing code without tests. If we didn’t have the test for the adding function above, we would have to run the code ourselves over and over, plugging in different numbers until we were sure that it was working… not a big deal for a basic <span className="inline-code">add(2, 2)</span>, but imagine having to do that for more complicated functions, like checking whether or not someone has won a game of tic tac toe: <span className="inline-code">game_win(["o", null,"x",null,"x",null,"x", "o", "o"])</span>. If you didn’t do TDD, then you might actually have to play multiple games against yourself just to test if the function was working correctly!
      </p>
      <h2>Exercises</h2>
      <ol>
        <li>Write a function that takes in an array of numbers and returns the sum of all the numbers.</li>
        <li>Write a function that takes in an array of strings and returns the longest string.</li>
        <li>Write a function that takes in an array of numbers and returns a new array with only the even numbers.</li>
      </ol>

      <div className='button-container'>
        <LinkButton btnLink='/curriculum/javascript' btnText='View Course' />
        {user ? <ExpButton /> : <Link to='/register'><button>Register to Track Progress</button></Link>}
        <LinkButton btnLink='/curriculum/javascript/lesson-4' btnText='Next Lesson' />
      </div>
    </div>
  )
}
