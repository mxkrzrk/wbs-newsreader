import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Main from './components/Main/Main';
import Card from './components/Card/Card';

function App() {
  return (
    <Container>
      <div>Header</div>
      <div>SearchBar</div>
      <Main>
        <div>Card</div>
        <Card
        title= "Python vs. JavaScript – What Are the Key Differences?"
         author= "oedmarap"
        points= "1"
        objectID= "25977892"
        url= "https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/" 
        />
        <Card
        title= "Python vs. JavaScript – What Are the Key Differences?"
         author= "oedmarap"
        points= "1"
        objectID= "25977892"
        url= "https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/" 
        />
      </Main>
      <div>Footer</div>
    </Container>
  );
}

export default App;
