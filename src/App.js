import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Main from './components/Main/Main';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container>
      <Header />
      <div>SearchBar</div>
      <Main>
        <div>Card</div>
      </Main>
      <Footer/>
    </Container>
  );
}

export default App;
