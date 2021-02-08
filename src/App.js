import React, { useEffect, useState } from 'react';
import { fetchNews } from './api';
import './App.css';
import Container from './components/Container/Container';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
//import Spinner from 'react-bootstrap/Spinner';
// import Search from './components/Search/search';

function App() {
  const [news, setNews] = useState();
  const [userInput, setUserInput] = useState();
  const [error, setError] = useState({ isError: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get news from API
    setIsLoading(true);
    fetchNews('https://hn.algolia.com/api/v1/search?tags=front_page')
      .then((data) => {
        setError({ isError: false, message: '' });
        setNews(data);
        setIsLoading(false);
      })
      .catch((err) => setError({ isError: true, message: err.message }));
    // Refresh news every 5 minutes
    const intervalID = setInterval(() => {
      fetchNews('https://hn.algolia.com/api/v1/search?tags=front_page')
        .then((data) => {
          setError({ isError: false, message: '' });
          setNews(data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError({ isError: true, message: err.message })});
    }, 300000);
    // Clear interval
    return () => clearInterval(intervalID);
  }, []);

  const handleInputUser = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    // Check if input is not empty
    if (!userInput) return;
    // Retrieve data
    setIsLoading(true);
    fetchNews(`https://hn.algolia.com/api/v1/search?query=${userInput}`)
      .then((data) => {
        if (data.length > 0) {
          setError({ isError: false, message: '' });
          setNews(data);
          setIsLoading(false);
        } else {
          throw new Error('Articles not found!');
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError({ isError: true, message: err.message })});
  };

  return (
    <Container>
      <Header />
      {/* <Search /> */}
      <form onSubmit={handleSubmitUser}>
        <input type="text" placeholder="Search" onChange={handleInputUser} />
        <button type="submit">Search</button>
      </form>
      <Main>
        <div>Card</div>
        {isLoading && <Loading />}
        {error.isError && (
          <div className="alert alert-danger">{error.message}</div>
        )}
        {news &&
          news.map((article) => <Card key={article.objectID} {...article} />)}
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
