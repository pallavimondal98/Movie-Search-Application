import React from 'react'


const Banner = () => {

    return (
        <div>
            <div className=' h-[33rem] w-full bg-gradient-to-l from-zinc-400 to-slate-950 relative'>
                <video className=' h-full w-full object-cover mix-blend-overlay absolute' autoPlay muted loop playsInline src='https://website-static.plex.tv/videos/home_hero_background_2023.mp4' />
                <div className=' h-[33rem] pl-12 pr-7 md:px-20 justify-center flex flex-col z-100'>
                    <h1 className='text-white text-4xl md:text-6xl font-bold float-left'>Go ahead, stream free</h1>
                    <p className='text-white mt-16 w-full text-xl md:w-[51%]'>With Netflip you can watch over 20,000 free movies and shows, plus Live TV on almost any device. What are you waiting for?</p>
                </div>
            </div>
        </div>
    )
}

export default Banner