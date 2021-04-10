import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>홈</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;