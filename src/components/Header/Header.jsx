import React, { useEffect, useState } from 'react';
import logo from '../../img/netflip2.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SearchIcon } from '@heroicons/react/outline';


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            let allMovies = [];
            for (let page = 1; page <= 100; page++) {
                const searchUrl = `https://omdbapi.com/?s=${searchTerm}&page=${page}&apikey=${process.env.REACT_APP_API_KEY}`;
                try {
                    const response = await axios.get(searchUrl);
                    const movies = response.data.Search;
                    if (movies && movies.length > 0) {
                        allMovies = allMovies.concat(movies);
                    } else {
                        // Break the loop if there are no movies in the response, assuming we've reached the end of available data
                        break;
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                    // Optionally break or continue based on how you want to handle errors (e.g., rate limits)
                    break;
                }
            }
            setSearchResults(allMovies);
            setLoading(false);
        };
    
        if (searchTerm) {
            fetchMovies();
        } else {
            setSearchResults([]);
            setLoading(false);
        }
    }, [searchTerm]);


    return (
        <header className="bg-transparent">
            <nav className="container mx-auto p-4">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4">
                    <Link to="/" className="col-span-2 md:col-span-1">
                        <img className=" h-11" src={logo} alt="Logo" />
                    </Link>
                    <div className="relative col-span-2 md:col-span-1 md:flex-grow">
                        <input
                            type="text"
                            placeholder="Search for a movie"
                            className="w-full py-2 pl-10 pr-4 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        {loading && <div className="absolute inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center">Loading...</div>}
                        {searchResults.length > 0 && (
                            <div className="search-results-container text-white mt-1 overflow-y-scroll bg-gradient-to-r from-red-400 p-2 rounded-lg absolute h-96 w-full z-10">
                                {searchResults.map((movie) => (
                                    <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                                        <div className=" w-fit flex items-center space-x-2 cursor-pointer p-2 m-2 hover:bg-red-600 rounded-lg ">
                                            <img src={movie.Poster} alt={movie.Title} className="h-10 w-10 object-cover" />
                                            <p>{movie.Title} ({movie.Year})</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className=" md:flex space-x-4 justify-center w-52">
                        <Link to="/home" className="text-gray-200 hover:text-red-600">Home</Link>
                        <Link to="/movies" className="text-gray-200 hover:text-red-600">Movies</Link>
                        <Link to="/home" className="text-gray-200 hover:text-red-600 ">TV Shows</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

