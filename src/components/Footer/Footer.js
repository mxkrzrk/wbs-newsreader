import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="news-footer">
      <Nav className="d-flex justify-content-center align-items-center">
        <Nav.Item>
          <Nav.Link href="">Guidelines</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">FAQ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Lists</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">API</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Security</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Legal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
  );
};
export default Footer;
