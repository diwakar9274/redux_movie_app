import './App.css.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieCard from './components/MovieCard/MovieCard';
import MovieDetail from './components/MovieDetail/MovieDetail';
import MovieListing from './components/MovieListing/MovieListing';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element= { <Home /> } />
        <Route path='/movie/:imdbID' element= { <MovieDetail /> } />
        <Route path='*' element= { <PageNotFound /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
