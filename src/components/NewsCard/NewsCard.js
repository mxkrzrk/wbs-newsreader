import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import './NewsCard.css';

function NewsCard({ title, author, points, objectID, url, num_comments }) {
  return (
    <Card id={objectID} className="news-card shadow">
      <Card.Header className="news-card-header">
        <span>
          Comments: <Badge variant="light">{num_comments}</Badge>
        </span>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <a href={url} target="_blank" rel="noreferrer">
            Go to article...
          </a>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="news-card-footer">
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col>by: {author}</Col>
          <Col>points: {points}</Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default NewsCard;
