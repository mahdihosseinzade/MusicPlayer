import React,{useRef,useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPlay,faPause } from "@fortawesome/free-solid-svg-icons";
import "./Player.scss";


const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setCurrentSong,
  setSongs
}) => {

  useEffect(() => {

    const newSongs = songs.map((item)=>{
      if(item.id===currentSong.id){
        return(
          {
            ...item,
            active:true
          }
        )
      }else{
        return {
          ...item,
          active: false
        };
      }
    })

    setSongs(newSongs);
    
  }, [currentSong])

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef(null);
  const playSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    if(currentTime===duration){
      skipSong("next");
      setIsPlaying(false);
    }
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  function formatTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  const dragHandler = (e) => {
    const currentTime = e.target.value;
    audioRef.current.currentTime = currentTime;
    setSongInfo({ ...songInfo, currentTime });
  };

  const skipSong = (dir) => {
    const currentIndex = songs.findIndex((item) => item.id === currentSong.id);
    if(dir==="next" && currentIndex!==songs.length-1){
      setCurrentSong(songs[currentIndex+1]);
    }else if (dir==="back" && currentIndex!==0) {
      setCurrentSong(songs[currentIndex - 1]);
    }else{
      return;
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          type="range"
          min={0}
          max={songInfo.duration||100}
          value={songInfo.currentTime}
        />
        <p>{formatTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipSong("back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSong}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          onClick={() => skipSong("next")}
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onLoadedMetadata={timeUpdate}
        onTimeUpdate={timeUpdate}
        ref={audioRef}
        src={currentSong.audio}
      />
    </div>
  );
};

export default Player;