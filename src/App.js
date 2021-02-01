import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Main from './components/Main/Main';

function App() {
  return (
    <Container>
      <div>Header</div>
      <div>SearchBar</div>
      <Main>
        <div>Card</div>
      </Main>
      <div>Footer</div>
    </Container>
  );
}

export default App;
