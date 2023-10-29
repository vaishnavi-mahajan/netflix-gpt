
const VideoTitle = ({title, overview}) => {
  return (
    
    <div className='w-screen aspect-video pt-[16%] px-24 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='text-5xl font-bold'>{title} </h1>
      <p className='py-6 text-md w-1/3'>{overview}</p>
      <div className=''>
        <button className="text-black text-xl bg-white px-12 p-4  rounded-lg hover:bg-opacity-70">▶ Play</button>
        <button className="mx-2 text-white text-xl bg-gray-500 px-12 p-4 bg-opacity-50 hover:bg-opacity-70 rounded-lg">More Info ⓘ</button>

      </div>
    </div>
  )
}

export default VideoTitle