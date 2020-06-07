import React from 'react';

import Navbar from './components/Navbar'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'
import EditExercise from './components/EditExercise'
import ExercisesList from './components/ExercisesList'


import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;

