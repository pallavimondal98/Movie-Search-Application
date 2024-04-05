import React, { useEffect, useState } from 'react'
import CardModel from '../cardModel/CardModel'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// console.log(process.env);
const Allmovies = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const fetchAllMovies = async (page) => {
        setLoading(true);
        
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=movie&page=${page}&apikey=${process.env.REACT_APP_API_KEY}`);
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

    useEffect(() => {
        fetchAllMovies(currentPage);
    }, [currentPage]);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className='text-white h-auto w-full'>
            <h1 className=' font-bold text-3xl mb-3 p-7'>All Movies</h1>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 m-4'>
                {movies.map((card, index) => (<CardModel key={index} card={card} />))}
              </div>
            )}
            <Stack spacing={2}>
                <Pagination 
                style={{
                    display:'flex',
                    justifyContent:'center',
                    background:'gray'
                }}
                onChange={handleChange}
                count={totalPages} 
                page={currentPage} 
                color="secondary" />
            </Stack>
        </div>
    )
}

export default Allmovies


