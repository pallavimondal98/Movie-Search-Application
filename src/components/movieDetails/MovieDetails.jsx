import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../footer/Footer'

const MovieDetails = () => {

    const { id } = useParams(); // Retrieve movie ID from URL parameters
    console.log('params id:', id);
    const [movieDetails, setMovieDetails] = useState(null);

    const fetchMovieDetailedData = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            setMovieDetails(data); // Set movieDetails to detailed movie data
            console.log('movie details:', data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchMovieDetailedData()
    }, [id]);

    // Render loading state if movieDetails is null
    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='bg-black h-auto w-full'>
                <Header />
                <div className='h-[25rem] bg-gradient-to-t from-black to-zinc-300'>
                    <img className='h-full w-full object-cover mix-blend-overlay ' src={movieDetails.Poster} alt='' />
                </div>
                <div className='flex justify-center top-96 left-40'>
                    <div className='bg-black h-auto w-96 md:w-[65rem] rounded-t-lg p-8'>
                        <div className=' grid md:flex gap-16'>
                            <div className='flex items-center justify-center '>
                                <img className=' h-[25rem] w-[45rem] rounded-md ' src={movieDetails.Poster} alt='' />
                            </div>
                            <div className=' '>
                                <div className='flex items-center'>
                                    <h1 className='text-white font-bold text-3xl'>{movieDetails.Title}</h1>
                                    <h1 className='text-gray-400  text-2xl m-2'>({movieDetails.Year})</h1>
                                </div>

                                <div className='flex gap-4'>
                                    <h3 className='text-gray-400 text-base'>{movieDetails.Runtime}</h3>
                                    <h3 className='text-gray-400 text-base'>{movieDetails.Country}</h3>
                                    <h3 className='text-gray-400 text-base' ><i className="fa-solid fa-star" style={{ color: "#f40679" }}></i> {movieDetails.imdbRating}</h3>
                                </div>

                                <div className='grid gap-20'>
                                    <h3 className='text-gray-400 text-lg '>{movieDetails.Genre}</h3>
                                    <p className='text-white text-lg'>{movieDetails.Plot}</p>
                                    <div>
                                        <p className='text-white'><span className='mr-4 text-gray-400'>Directed By:</span>  {movieDetails.Director}</p>

                                        <p className='text-white'><span className='mr-4 text-gray-400'>Written By:</span>  {movieDetails.Writer}</p>
                                        <p className='text-white'><span className='mr-4 text-gray-400'>Cast Members:</span>  {movieDetails.Actors}</p>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}

export default MovieDetails