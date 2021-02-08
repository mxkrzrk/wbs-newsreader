import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SearchBar.css';

const SearchBar = ({ handleSubmitUser, handleInputUser, userInput}) => {
  return (
    <div className="news-form-box">
      <Form
        onSubmit={handleSubmitUser}
        className="d-flex justify-content-center align-items-center"
      >
        <Form.Control
          type="text"
          placeholder="Search"
          onChange={handleInputUser}
          size="lg"
          className="news-form-input"
          autoFocus
          value={userInput}
        />
        <Button type="submit" className="news-form-button" size="lg">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
