import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function AddLesson() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('');
  const [order, setOrder] = useState(0);
  const [content, setContent] = useState('');

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
      <h1>Add a Lesson</h1>
      <p>Add a title, author, language, and the content of your lesson.</p>
      <p>Once you're done, click submit to add the lesson.</p>
      <Link to='/admin-lessons'><button>View All Lessons</button></Link>
      <br />
      <form className='general-survey-form' onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <label>Language:</label>
        <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
        <label>Order in Course:</label>
        <input type="number" value={order} onChange={(e) => setOrder(e.target.value)} />
        <label>Content:</label>
        <textarea 
          style={{ width: '500px', height: '300px' }} 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}