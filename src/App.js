import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container>
      <Header />
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
      <Footer/>
    </Container>
  );
}

export default App;
