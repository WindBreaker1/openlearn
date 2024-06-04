import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ExpButton from '../components/ExpButton';
import LinkButton from '../components/LinkButton';

export default function LessonPage() {
  const { id } = useParams();
  const {user, lessons, setLessons} = useContext(UserContext);
  const [lesson, setLesson] = useState(null);
  
  
  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const response = await axios.get(`/getOneLesson/${id}`);
        setLesson(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchLesson();
  }, [id]);
  
  if (!lesson) {
    return <div>Loading...</div>;
  }
  
  document.title = `${lesson.title} | OpenLearn`;
  
  return (
    <div className='page'>
      <h1>{lesson.title}</h1>
      <hr />
      <p>Language: {lesson.language}</p>
      <p>Author: {lesson.author}</p>
      <hr />
      <ReactMarkdown 
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
          ) : (
            <code className={`inline-code ${className}`} {...props}>
              {children}
            </code>
          )
        }
      }}
    >
      {lesson.content}
    </ReactMarkdown>
    <div className='button-container'>
        <LinkButton btnLink='/curriculum/javascript' btnText='View Course' />
        {user ? <ExpButton /> : <Link to='/register'><button>Register to Track Progress</button></Link>}
        <LinkButton btnLink='/curriculum/javascript/lesson-2' btnText='Next Lesson' />
      </div>
    </div>
  );
}