// myportfolio-frontend/src/components/ProjectForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const ProjectForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`/api/projects/${id}`)
        .then(response => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setLink(response.data.link);
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const project = { title, description, link };
    try {
      if (id) {
        await axios.put(`/api/projects/${id}`, project);
      } else {
        await axios.post('/api/projects', project);
      }
      history.push('/projects');
    } catch (error) {
      console.error('Error saving project', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Link</label>
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProjectForm;
 
