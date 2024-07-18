import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Doctors from './pages/Doctors';
import Nurses from './pages/Nurses';
import './App.css'; // Добавьте стили

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/nurses" element={<Nurses />} />
          <Route path="/" element={<Doctors />} /> {/* Добавьте редирект на главную страницу */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
