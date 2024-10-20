import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NotesApp from './components/NotesApp';
import FormApp from './components/FormApp';
import TodoList from './components/TodoList';
import WeatherApp from './components/WeatherApp';

const App: React.FC = () => {
  return (
    <div className="App bg-dark text-light min-vh-100">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/form" element={<FormApp/>} />
          <Route path="/notes" element={<NotesApp/>} />
          <Route path="/todo" element={<TodoList/>} />
          <Route path="/weather" element={<WeatherApp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;