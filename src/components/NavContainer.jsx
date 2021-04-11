import React from 'react';
import { Link } from 'gatsby';

const NavContainer = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>홈</Link></li>
          <li><Link to='/about/'>정보</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavContainer;