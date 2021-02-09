import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

const Header = () => {
  return (
    <Navbar className="news-navbar d-flex justify-content-center align-items-center">
      <Nav className="d-flex justify-content-center align-items-center">
        <div className="news-nav-icon-box">
          <FontAwesomeIcon icon={faNewspaper} size="2x" className="news-nav-icon" />
        </div>
        <h1>NewsReader</h1>
      </Nav>
    </Navbar>
  );
};
export default Header;
