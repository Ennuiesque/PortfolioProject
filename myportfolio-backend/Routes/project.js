// myportfolio-backend/routes/projects.js
const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Create project
router.post('/', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).send(project);
});

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
});

// Get a single project
router.get('/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.send(project);
});

// Update a project
router.put('/:id', async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(project);
});

// Delete a project
router.delete('/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;


