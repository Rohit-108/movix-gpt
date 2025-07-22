import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[13%] px-24 absolute text-white  bg-gradient-to-r from-black text-justify'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div>
                <button className=' text-xl  text-black p-3.5  px-8  rounded-lg bg-white hover:bg-opacity-80'>▶Play</button>
                <button className='mx-2 bg-gray-500 text-xl  text-white p-3.5  px-8 bg-opacity-50 rounded-lg '>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle