import React from 'react';

const Main = ({ children }) => {
  return (
    <div className="row">
      <div className="col-12">{children}</div>
    </div>
  );
};

export default Main;
