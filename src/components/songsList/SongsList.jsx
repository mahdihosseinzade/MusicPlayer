import React from "react";
import SongListItem from "../songListItem/SongListItem";

import './SongsList.scss';

const SongsList = ({
  songs,
  setCurrentSong,
  setSongs,
  displayListSong}) => {
  
    return (
    <div className={`songs-list ${displayListSong?'':'displayList'}`}>
      <h2>List of Songs</h2>
      <div className="songs-list-item">
        {songs.map((song) => (
          <SongListItem
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default SongsList;