import React, { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBar from './components/Search';

function App() {
  const [news, setNews] = useState();
  const [userInput, setUserInput] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error');
        }
      })
      .then((data) => setNews(data.hits))
      .catch((err) => console.error(err));
  }, []);

  const handleInputUser = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    // Check if input is not empty
    if (!userInput) return;
    // Retrieve data
    fetch(`https://hn.algolia.com/api/v1/search?query=${userInput}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error');
        }
      })
      .then((data) => {
        if (data.hits.length === 0) {
          setNews(null);
          setError(true);
        } else {
          setNews(data.hits);
          setError(false);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Header />
      <Search />
//       <form onSubmit={handleSubmitUser}>
//         <input type="text" placeholder="Search" onChange={handleInputUser} />
//         <button type="submit">Search</button>
//       </form>
      <Main>
        <div>Card</div>
        {error && <div>Error</div>}
        {news &&
          news.map((article) => (
            <Card
              key={article.objectID}
              title={article.title}
              author={article.author}
              points={article.points}
              url={article.url.value}
            />
          ))}
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
