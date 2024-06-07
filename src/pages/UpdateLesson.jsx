import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"

export default function UpdateLesson() {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  const { user } = useContext(UserContext);

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

  const updateLesson = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/updateLesson/${lesson._id}`, { title: e.target.title.value, author: e.target.author.value, language: e.target.language.value, order: e.target.order.value, content: e.target.content.value });
      setLesson(response.data);
      toast.success('Lesson updated successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update lesson...');
    }
  };

  if (!lesson) return <div>Loading...</div>;

  return (
    <div className='page center-page'>
      <h1>Edit Lesson: {lesson.title}</h1>
      <form className='general-survey-form' onSubmit={updateLesson}>
        <label>Title:</label>
        <input type="text" name="title" defaultValue={lesson.title} required />
        <label>Author:</label>
        <input type="text" name="author" defaultValue={lesson.author} required />
        <label>Language/Framework:</label>
        <select id="language" name="language" defaultValue={lesson.language}>
          <option value="" disabled>Select a language</option>
          <option value="Python">Python</option>
          <option value="C/C++">C/C++</option>
          <option value="Java">Java</option>
          <option value="Unity/C#">Unity/C#</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="SQL">SQL</option>
          <option value="PHP">PHP</option>
          <option value="Ruby">Ruby</option>
          <option value="Swift">Swift</option>
          <option value="Rust">Rust</option>
          <option value="Kotlin">Kotlin</option>
          <option value="Go/Golang">Go/Golang</option>
          <option value="Other">Other</option>
        </select>
        <label>Order in Course:</label>
        <input type="number" name="order" defaultValue={lesson.order} required />
        <label>Content:</label>
        <textarea style={{ width: '500px', height: '300px' }}  name="content" defaultValue={lesson.content} required />
        <button type="submit"><FontAwesomeIcon icon={faArrowRightToBracket} /> Update Lesson</button>
      </form>
      <Link to="/admin-lessons"><button>Back to Lessons</button></Link>
    </div>
  );
}
