import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NotesApp from './components/NotesApp';
import FormApp from './components/FormApp';
import TodoList from './components/TodoList';
import RecipeFinder from './components/RecipeFinder';
import WeatherApp from './components/WeatherApp';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/form" element={<FormApp/>} />
          <Route path="/notes" element={<NotesApp/>} />
          <Route path="/todo" element={<TodoList/>} />
          <Route path="/recipe" element={<RecipeFinder/>} />
          <Route path="/weather" element={<WeatherApp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;