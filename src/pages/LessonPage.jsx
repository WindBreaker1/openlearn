import './LessonPage.css';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ExpButton from '../components/ExpButton';
import LinkButton from '../components/LinkButton';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUserPen } from '@fortawesome/free-solid-svg-icons';

export default function LessonPage() {
  const { id } = useParams();
  const {user, lessons, setLessons} = useContext(UserContext);
  const [lesson, setLesson] = useState(null);
  const [nextLessonId, setNextLessonId] = useState(null);
  
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

  useEffect(() => {
    if (lessons && lesson) {
      const currentLessonIndex = lessons.findIndex(l => l._id === lesson._id);
      const nextLesson = lessons[currentLessonIndex + 1];
      if (nextLesson) {
        setNextLessonId(nextLesson._id);
      }
    }
  }, [lessons, lesson]);

  if (!lesson) {
    return null;
  }
  
  document.title = `${lesson.title} | OpenLearn`;
  
  return (
    <div className='page'>
      <h1>{lesson.title}</h1>
      <div className="lesson-properties">
        <p><FontAwesomeIcon icon={faCode} /> Language: {lesson.language}</p>
        <p><FontAwesomeIcon icon={faUserPen} /> Author: {lesson.author}</p>
      </div>
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
        <LinkButton btnLink={`/lessons/${nextLessonId}`} btnText='Next Lesson' />
      </div>
    </div>
  );
}