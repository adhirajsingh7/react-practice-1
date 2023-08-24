import './PlayButton.css'
const PlayButton =({message ,children, onSmash ,onPlay ,onPause})=>{

  let playing = false;
  const handleClick =()=>{
    if(playing)
    onPause();
    else
    onPlay();
    playing = !playing
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default PlayButton;