import resumeImage from '../assests/images/video_resume.png'
import moreInfo from '../assests/images/more_info.png'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[13%] px-24 absolute text-white  bg-gradient-to-r from-black text-justify'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4 line-clamp-5'>{overview}</p>
            <div className='flex gap-3 mt-4'>

                <button className='py-1 px-3 sm:py-2 md:px-3 xl:px-5 rounded-md bg-white text-black flex gap-2 items-center hover:bg-opacity-60'>
                    <img className='w-4 md:w-3 xl:w-5' src={resumeImage} alt='resumeImage' /><span className='text-xs md:text-sm xl:text-lg'>Play</span></button>
                <button className='hidden sm:flex py-2 px-5 rounded-md bg-[#b1adad] text-white bg-opacity-50  gap-2 items-center'>
                    <img className='w-3 md:w-4 xl:w-5' src={moreInfo} alt='infoImage' />
                    <span className='text-xs md:text-sm xl:text-lg'>More Info</span></button>
            </div>
        </div>
    )
}

export default VideoTitle