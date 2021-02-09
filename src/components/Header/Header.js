import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faHome } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

const Header = ({ handleClickHome }) => {
  return (
    <Navbar className="news-navbar d-flex justify-content-between align-items-center">
      <div className="news-nav-icon-home-box" onClick={handleClickHome}>
        <FontAwesomeIcon icon={faHome} className="news-nav-icon-home" />
      </div>
      <Nav className="d-flex justify-content-center align-items-center flex-grow-1">
        <div className="news-nav-icon-box">
          <FontAwesomeIcon
            icon={faNewspaper}
            className="news-nav-icon"
          />
        </div>
        <h1>NewsReader</h1>
      </Nav>
    </Navbar>
  );
};
export default Header;
