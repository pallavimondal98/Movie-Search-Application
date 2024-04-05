import React from 'react'
import logo from '../../img/netflip2.png'

const Footer = () => {
    return (
        <footer className=' bg-gray-900 text-white flex h-auto '>
            <div className=' lg: w-full md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
                <div>
                    <img src={logo} alt='' className=' h-16 md:pr-3  lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold' />
                </div>

                <div>
                    <h1 className=' font-bold text-2xl mr-32'>Company</h1>

                    <ul className='mt-3'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Partners</li>
                        <li>Our Culture</li>
                    </ul>
                </div>
                <div>
                    <h1 className=' font-bold text-2xl mt-6  mr-32'>Watch Free</h1>
                    <ul className='mt-2'>
                        <li>TV Channel Finder</li>
                        <li>What to Watch</li>
                        <li>What to Watch on Hulu</li>
                        <li>A24 collection</li>
                    </ul>
                </div>
            </div>

            <div>
            </div>

        </footer>
    )
}

export default Footer