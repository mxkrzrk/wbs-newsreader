import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.css';

const Loader = () => {
  return (
    <div className="news-loader">
      <Spinner animation="grow" className="news-loader-spinner" />
    </div>
  );
};

export default Loader;
