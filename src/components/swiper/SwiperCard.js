import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import CardModel from '../cardModel/CardModel';
const SwiperCard = () => {


  const [movie, setMovie] = useState([]);;

  const fetchMovieData = async () => {
    try {
      const response = await fetch(`https://omdbapi.com/?s=love&page=2&apikey=${process.env.REACT_APP_API_KEY}`);
      const data = await response.json();
      setMovie(data.Search);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchMovieData()
  }, [])
  return (
    <div className='text-white'>
      <h1 className=' font-bold text-2xl m-11 '>English Movies</h1>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className='mySwiper'
        style={{margin:'1rem'}}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {movie.map((card) => (
          <SwiperSlide key={card.imdbID} >
            <CardModel card={card} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default SwiperCard