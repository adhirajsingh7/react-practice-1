import './Video.css'

const Video =({id, title, channel, views, time, bgColor, verified})=>{


  return (
    <>
    <div className='container'>
      <div className='pic'>
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="cat" />
      </div>
      <div className='title' style={{backgroundColor:bgColor}} >{title}</div>
      <div className='channel'>{channel} {verified && '✅'}</div>
      <div className='views'>{views} <span>.</span> {time}</div>
    </div>
    </>
  )
}

export default Video;