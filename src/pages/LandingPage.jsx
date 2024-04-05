import React from 'react'
import logo from '../img/netflip.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div>
            <div className=' bg-gradient-to-t from-zinc-900 to-zinc-950 h-screen w-full relative'>
                <img className='w-full h-full absolute bg-cover mix-blend-overlay' src='https://www.taste.io/images/hero.jpg' alt='' />
                <div className='w-full h-full'>
                    <div className='flex relative h-72 bottom-24'>
                        <img className='z-10' src={logo} alt='' />
                    </div>



                    <div className=' justify-center flex flex-col items-center z-10'>
                        <h1 className='text-white text-6xl font-bold text-center'>Unlimited movies, TV shows and more</h1>
                        <h3 className='text-white text-4xl p-4 pt-5 sm:justify-center'>Watch anywhere. Cancel anytime.</h3>
                        <div className='flex p-6'>
                            <h2 className='text-white text-3xl pr-2 text-center'>Ready to watch?</h2> <Link to='/home'><button className='text-white relative text-2xl bg-red-700 text-center p-2 rounded-lg font-medium cursor-pointer z-10'>Get Started</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default LandingPage