import React from 'react'
import Header from '../components/Header/Header'
import Allmovies from '../components/allMovies/Allmovies'
import Footer from '../components/footer/Footer'


const Movies = () => {

  return (
    <div className='bg-slate-900'>
        <Header/>
        <Allmovies/>
        <Footer/>
    </div>
  )
}

export default Movies