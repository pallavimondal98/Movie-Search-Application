import React, { useEffect, useState } from 'react'
import CardModel from '../cardModel/CardModel'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// console.log(process.env);
const Allmovies = () => {

    const [movies, setMovies] = useState([]); // State for storing movies and its setter
    const [loading, setLoading] = useState(false) // State for loading status
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [totalPages, setTotalPages] = useState(0); // State for total pages

    const fetchAllMovies = async (page) => { // Function to fetch movies
        setLoading(true);

        // Try catch block for error handling
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

    // useEffect to fetch movies when currentPage changes
    useEffect(() => {
        fetchAllMovies(currentPage);
    }, [currentPage]);

    // Function to handle page change
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className='text-white h-auto w-full'>
            <div>
                <h1 className=' font-bold text-3xl mb-3 p-7'>All Movies</h1>
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
    )
}

export default Allmovies


