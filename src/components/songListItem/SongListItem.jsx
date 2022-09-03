import React from "react";

import './SongListItem.scss';

const SongListItem = ({ song, setCurrentSong,songs,setSongs }) => {
  const songSelect = () => {
    const currentSong = songs.find((item) => item.id===song.id);
    setCurrentSong(currentSong);

    const newSongs = songs.map((item)=>{
      if(item.id===song.id){
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

  };

  return (
    <div
      onClick={songSelect}
      className={song.active ? "song-item selected" : "song-item"}
      >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default SongListItem;