import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ClassroomSearch from './components/ClassroomSearch';
import Timetable from './components/Timetable';
import IssueReport from './components/IssueReport';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header card">
          <div className="brand">
            <img src="/vite.svg" alt="logo" style={{ width: 40, height: 40, marginRight: 12 }} />
            <div>
              <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Smart Campus</h1>
              <small style={{ color: 'var(--text-secondary)' }}>Assistant Dashboard</small>
            </div>
          </div>
        </header>

        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Search</NavLink>
          <NavLink to="/timetable" className={({ isActive }) => (isActive ? 'active' : '')}>Timetable</NavLink>
          <NavLink to="/report" className={({ isActive }) => (isActive ? 'active' : '')}>Report Issue</NavLink>
          <NavLink to="/chatbot" className={({ isActive }) => (isActive ? 'active' : '')}>FAQ Bot</NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<ClassroomSearch />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/report" element={<IssueReport />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>

        <footer style={{ marginTop: 24, textAlign: 'center', color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Smart Campus Assistant — Built with React + Firebase
        </footer>
      </div>
    </Router>
  );
}

export default App;
