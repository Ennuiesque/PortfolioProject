// myportfolio-frontend/src/components/ProjectDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/projects/${id}`)
      .then(response => setProject(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link}>Project Link</a>
    </div>
  );
};

export default ProjectDetail;
 
