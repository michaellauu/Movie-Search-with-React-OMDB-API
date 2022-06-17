import { useEffect } from 'react';
import './App.css';
import  SearchIcon from './search.svg';

const API_URL = " http://www.omdbapi.com?apikey=5dd576a6";

const movie1 = {
        "Title": "Shrek 4-D",
        "Year": "2003",
        "imdbID": "tt0360985",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDVlOWZkNTEtNTcxZS00NDVhLWFlZWItYWFhNmZmZWNhYzU1XkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Shrek');
    }, []);


    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movie titles."
                    value="Superman"
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>
                </div>

            </div>

        </div>
    );
}


export default App;