import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import "./ToggleList.scss";


const ToggleList = ({ displayListSong, setDisplayListSong }) => {
  return (
    <nav>
      <h1 id="app-title">Waves</h1>
      <button onClick={() => setDisplayListSong(!displayListSong)}>
        <span id="button-toggle">Songs List</span>
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default ToggleList;