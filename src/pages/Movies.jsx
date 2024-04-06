import React, { useEffect, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import CardModel from '../components/cardModel/CardModel';


const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState('thor');
  const [contentType, setContentType] = useState('movie');
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearchChange = (event) => {
    setSearchTitle(event.target.value);
  };

  const fetchAllMovies = async (page,contentType='movie') => {
    setLoading(true);
    let url = `https://www.omdbapi.com/?s=${searchTitle}&page=${page}&apikey=${process.env.REACT_APP_API_KEY}`;
    if (contentType !== 'both') {
      url += `&type=${contentType}`;
    }

    // try {
    //   const response = await fetch(`https://www.omdbapi.com/?s=${searchTitle}&type=${contentType}&page=${page}&apikey=${process.env.REACT_APP_API_KEY}`);
    //   const data = await response.json();
    //   if (data.Response === 'True' && data.Search !== null) {
    //     setMovies(data.Search);
    //     setTotalPages(Math.ceil(data.totalResults / 10));
    //   }
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // } finally {
    //   setLoading(false);
    // }
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True' && data.Search !== null) {
        setMovies(data.Search);
        setTotalPages(Math.ceil(data.totalResults / 10));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  //  useEffect(() => {
  //   setCurrentPage(1); // This will reset the page to 1 whenever searchTitle changes
  // }, [searchTitle]);

  useEffect(() => {
    fetchAllMovies(currentPage, contentType);
  }, [currentPage, contentType]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleMoviesClick = () => {
    setContentType('movie');
    setCurrentPage(1); // This will trigger the useEffect to refetch movies with page 1
  };
  
  const handleTVSeriesClick = () => {
    setContentType('series');
    setCurrentPage(1); // This will trigger the useEffect to refetch movies with page 1
  };

  const handleAllClick = () => {
    setContentType('both');
    setCurrentPage(1); // This will trigger the useEffect to refetch movies with page 1
  };

  return (
    <div className='bg-slate-900'>
      <Header />
      <div className='text-white h-auto w-full'>
        <div className='flex m-7 '>
          <h1 className=' font-bold text-3xl mr-4 '>All Movies</h1>
          <input
            type="text"
            placeholder="Search for a movie"
            className="text-gray-400 py-2 pl-10 pr-4 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
            value={searchTitle}
            onChange={handleSearchChange}
          />
          <SearchIcon className="absolute h-5 w-5 top-[115px] left-[199px] text-gray-400" />
          <button className=' mx-4 px-6 border border-yellow-200 rounded-full  hover:bg-slate-700  active:bg-red-700 focus:outline-none focus:ring focus:ring-violet-300'  onClick={handleAllClick}>All</button>
          <button className=' px-3 border border-yellow-200 rounded-full  hover:bg-slate-700  active:bg-red-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={handleMoviesClick}>Movies</button>
          <button className=' ml-4 px-3 border border-yellow-200 rounded-full  hover:bg-slate-700  active:bg-red-700 focus:outline-none focus:ring focus:ring-violet-300'  onClick={handleTVSeriesClick}>Series</button>
          
        </div>


        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 m-4'>
            {movies.map((card, index) => (<CardModel key={index} card={card} />))}
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