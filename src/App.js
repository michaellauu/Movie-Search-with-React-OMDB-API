import { useEffect } from 'react';
import './App.css';
import  SearchIcon from './search.svg';

const API_URL = " http://www.omdbapi.com?apikey=5dd576a6";

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
        <h1>App</h1>
    );
}


export default App;