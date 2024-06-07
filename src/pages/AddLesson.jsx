import React, { useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePen, faExpand, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"

export default function AddLesson() {
  const fileInput = useRef(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('');
  const [order, setOrder] = useState(0);
  const [content, setContent] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e) => {
      setContent(e.target.result);
    };
  
    reader.readAsText(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/createLesson', { title, author, language, content, order });
      toast.success('New lesson added successfully!');
      setTitle('');
      setAuthor('');
      setLanguage('');
      setOrder(0);
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='page center-page'>
      <h1><FontAwesomeIcon icon={faSquarePen} /> Add a Lesson</h1>
      <p>Add a title, author, language, and the content of your lesson.</p>
      <p>Content of the lesson can be written in markdown.</p>
      <p>Once you're done, click submit to add the lesson.</p>
      <Link to='/admin-lessons'><button><FontAwesomeIcon icon={faExpand} /> View All Lessons</button></Link>
      <br />
      <form className='general-survey-form' onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title...' />
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Author...' />
        <label>Language/Framework:</label>
        <select id="language" name="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
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
        <input type="number" value={order} onChange={(e) => setOrder(e.target.value)} />
        <label>Content:</label>
        <input type="file" accept=".md" ref={fileInput} onChange={handleFileUpload} style={{ display: 'none' }} />
        <button type="button" onClick={() => fileInput.current.click()}>Import Markdown File</button>
        <textarea 
          style={{ width: '550px', height: '500px' }} 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          placeholder='Content can be written in markdown...'
        />
        <button type="submit"><FontAwesomeIcon icon={faArrowRightToBracket} /> Submit</button>
      </form>
    </div>
  );
}