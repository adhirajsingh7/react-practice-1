import Video from "./components/Video";
import './App.css'
import videos from './data/Data'
import PlayButton from "./components/PlayButton";
const App = () => {

  return (
    
    <div className="App">
      <h1>Hello</h1>
      {
        videos.map((video,key)=> 
        <Video key={key}
        id={video.id}
        bgColor={video.bgColor}
        title={video.title} 
        channel={video.channel} 
        views={video.views} 
        time={video.time} 
        verified={video.verified}/>)
      }
      <div style={{clear: 'both'}}>
        <PlayButton message={'Play-Button'} onPlay={()=>console.log('Playy')} onPause={()=>console.log('Pause')}>Play</PlayButton>
        {/* <PlayButton message={'Pause-Button'} onSmash={(e)=>alert(e)}>Pause</PlayButton> */}
      </div>    
    </div>
    
    
  );
};

export default App;
