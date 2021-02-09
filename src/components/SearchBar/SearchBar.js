import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './SearchBar.css';

const SearchBar = ({ handleSubmitUser, handleInputUser, isValidated }) => {
  return (
    <div className="news-form-box">
      <Form noValidate validated={isValidated} onSubmit={handleSubmitUser}>
        <Form.Row>
          <Form.Group className="news-form-box-input" as={Col} xs={10} lg={11}>
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={handleInputUser}
              size="lg"
              className="news-form-input"
              autoFocus
              required
            />
            <Form.Control.Feedback type="invalid">
              Please insert a keyword!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={2} lg={1}>
            <Button type="submit" className="news-form-button" size="lg">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SearchBar;
