import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/doctors">Врачи</Link></li>
          <li><Link to="/nurses">Медсестры</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
