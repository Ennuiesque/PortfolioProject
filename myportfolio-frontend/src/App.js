// myportfolio-frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import ProjectDetail from './components/ProjectDetail';

import './App.css';  // Import your custom styles

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';  // Set default base URL
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/projects/new" component={ProjectForm} />
          <Route path="/projects/:id/edit" component={ProjectForm} />
          <Route path="/projects/:id" component={ProjectDetail} />
          <Route path="/projects" component={ProjectList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;