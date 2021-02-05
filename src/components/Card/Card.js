import React from 'react';
import Container from '../Container/Container';

function Card({ title, author, points, objectID, url }) {
  return (
    <Container className="row" id={objectID}>
      <div className="col-12">
        <h6 href={url}>{title}</h6>
        <div className="row justify-content-left">
          <p className="col-auto">by:{author}</p>
          <p className="col-auto">points:{points}</p>
        </div>
      </div>
    </Container>
  );
}

export default Card;

// "title": "Python vs. JavaScript – What Are the Key Differences?"
// "author": "oedmarap"
// "points": 1
// "objectID": "25977892"
// "url": "https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/"
