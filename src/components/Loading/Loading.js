import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
return (
    <div className="ml-3">
        <Spinner animation="border" />
        <p>Loading results...</p>
    </div>
      
)
}

export default Loading;