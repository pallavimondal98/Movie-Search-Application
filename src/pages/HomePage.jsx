import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/banner/Banner'
import SwiperCard from '../components/swiper/SwiperCard'
import Footer from '../components/footer/Footer';
import Allmovies from '../components/allMovies/Allmovies';


const HomePage = () => {


  return (
    <div className=' bg-slate-900 h-auto w-full'>
      <Header className='md:w-svw' />
      <Banner />
      <SwiperCard />
      <Allmovies/>
      <Footer />
    </div>
  )
}

export default HomePage