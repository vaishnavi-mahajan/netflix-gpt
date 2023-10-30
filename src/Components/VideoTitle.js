
const VideoTitle = ({title, overview}) => {
  return (
    
    <div className='px-6 w-screen aspect-video pt-[16%] md:px-24 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='text-2xl md:text-5xl font-bold'>{title} </h1>
      <p className='hidden md:inline-block py-6 text-md w-1/3'>{overview}</p>
      <div className='my-2 md:my-0'>
        <button className="text-black text-xl bg-white py-1 px-2 md:px-12 md:py-4 rounded-lg hover:bg-opacity-70">▶ Play</button>
        <button className=" hidden md:inline-block mx-2 text-white text-xl bg-gray-500 px-12 p-4 bg-opacity-50 hover:bg-opacity-70 rounded-lg">More Info ⓘ</button>

      </div>
    </div>
  )
}

export default VideoTitle