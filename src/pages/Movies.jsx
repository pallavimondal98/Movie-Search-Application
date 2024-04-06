import React, { useEffect, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import CardModel from '../components/cardModel/CardModel';
import { Link } from 'react-router-dom';

// Debounce function to limit the rate
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);// State to hold the debounced value

  useEffect(() => {
    const handler = setTimeout(() => {   // Sets a timeout to update the debounced value after the specified delay.
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Clears the timeout if the component is unmounted or the value/delay changes.
    };
  }, [value, delay]);

  return debouncedValue;  // Returns the current debounced value.
}


const Movies = () => {

  const [movies, setMovies] = useState([]); // State to hold the list of movies.
  const [searchTitle, setSearchTitle] = useState('thor'); // State to hold the current search title, default is 'thor'.
  const [contentType, setContentType] = useState('both'); // State to hold the type of content to fetch, default is 'both'.
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1); // State to hold the current page number.
  const [totalPages, setTotalPages] = useState(0); // State to hold the total number of pages.

  const handleSearchChange = (event) => {
    setSearchTitle(event.target.value);  // Updates the search title based on user input.
  };

  const debouncedSearchTitle = useDebounce(searchTitle, 500); // Debounce searchTitle

  useEffect(() => {
    if (debouncedSearchTitle) {
      fetchAllMovies(currentPage, contentType);  // Fetches movies if there's a debounced search title.
    }
  }, [currentPage, contentType, debouncedSearchTitle]);  // Dependency array

  const fetchAllMovies = async (page, contentType = 'movie') => {
    setLoading(true);
    let url = `https://www.omdbapi.com/?s=${searchTitle}&page=${page}&apikey=${process.env.REACT_APP_API_KEY}`;
    if (contentType !== 'both') {
      url += `&type=${contentType}`;  // Appends the content type to the URL if it's not 'both'.
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True' && data.Search !== null) {
        setMovies(data.Search); // Updates the movies state with the fetched data.
        setTotalPages(Math.ceil(data.totalResults / 10)); // Calculates and sets the total number of pages.
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   setCurrentPage(1); // Resets the current page to 1 when the search title changes.
  // }, [searchTitle]);

  useEffect(() => {
    fetchAllMovies(currentPage, contentType, searchTitle);
  }, [currentPage, contentType, searchTitle]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Handlers to update the content type and reset the current page.
  const handleMoviesClick = () => {
    setContentType('movie');
    setCurrentPage(1); // This will trigger to refetch movies with page 1
  };

  const handleTVSeriesClick = () => {
    setContentType('series');
    setCurrentPage(1);
  };

  const handleAllClick = () => {
    setContentType('both');
    setCurrentPage(1);
  };

  return (
    <div className='bg-slate-900'>
      <Header />
      <div className='text-white h-auto w-full'>
        <div className='grid md:flex m-7 '>
          <div className='flex'>
            <h1 className=' font-bold md:text-3xl w-32 md:w-44 text-xl mr-0 md:mr-4 '>All Movies</h1>
            <input
              type="text"
              placeholder="Search for a movie"
              className="text-gray-400 py-2 pl-10 pr-4 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none md:w-48"
              value={searchTitle}
              onChange={handleSearchChange}
            />
            <SearchIcon className="absolute h-5 w-5 top-[209px] left-[158px] md:top-[115px] md:left-[227px] text-gray-400" />
          </div>

          <div className='flex mt-3'>
            <button className=' mx-4 px-6 border border-yellow-200 rounded-full  hover:bg-slate-700  active:bg-red-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={handleAllClick}>All</button>
            <button className=' px-3 border border-yellow-200 rounded-full  hover:bg-slate-700  active:bg-red-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={handleMoviesClick}>Movies</button>
            <button className=' ml-4 px-3 border border-yellow-200 rounded-full  hover:bg-slate-700  active:bg-red-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={handleTVSeriesClick}>Series</button>
          </div>


        </div>


        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 m-4'>
            {movies.map((card, index) => (
              <Link to={`/movie/${card.imdbID}`} key={card.imdbID}><CardModel key={index} card={card} /></Link>
            ))}
          </div>
        )}
        <Stack spacing={2}>
          <Pagination
            className='bg-transparent'
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
            onChange={handleChange}
            count={totalPages}
            page={currentPage}
            color="secondary"
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white', // Changes the text color to white
              },
              '& .MuiPaginationItem-icon': {
                color: 'white', // Ensures icons (like arrows) are also white
              }
            }}
          />
        </Stack>
      </div>
      <Footer />
    </div>
  )
}

export default Movies