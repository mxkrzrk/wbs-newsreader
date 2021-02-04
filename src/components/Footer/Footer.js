import React from 'react';

const Footer = () => {
  return (
    <footer className="footer py-3" style={{ backgroundColor: '#Bfcca1' }}>
      <div className="row px-3">
        <div className="col-6 col-md-3">
          <a className="text-dark" style={{ textDecoration: 'none' }} href="#">
            FAQ
          </a>
        </div>
        <div className="col-6 col-md-3">
          <a className="text-dark" style={{ textDecoration: 'none' }} href="#">
            Legal
          </a>
        </div>
        <div className="col-6 col-md-3">
          {' '}
          <a className="text-dark" style={{ textDecoration: 'none' }} href="#">
            Contact
          </a>
        </div>
        <div className="col-6 col-md-3">
          <a className="text-dark" style={{ textDecoration: 'none' }} href="#">
            API
          </a>
        </div>
      </div>
      <div className="text-center ">&copy; 2021</div>
    </footer>
  );
};
export default Footer;
