import React , {useState} from 'react';
import Player from './components/player/Player';
import Song from './components/Song/Song';
import {audioData} from './data/data';
import SongsList from './components/songsList/SongsList';

import './App.scss';
import ToggleList from './components/ToggleList/ToggleList';

function App() {
  const [songs,setSongs]=useState(audioData());
  const [currentSong,setCurrentSong]=useState(songs[0]);
  const [isPlaying,setIsPlaying]=useState(false);
  const [displayListSong, setDisplayListSong]=useState(false);

  return (
    <div className={`App ${displayListSong?"activeList":""}`}>
      <ToggleList displayListSong={displayListSong} setDisplayListSong={setDisplayListSong}/>
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong}/>
      <SongsList songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} displayListSong={displayListSong}/>
    </div>
  );
}

export default App;
