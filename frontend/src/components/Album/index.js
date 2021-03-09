import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbumData } from "../../store/artist";
import { addSong } from "../../store/artist";
import Song from "../Song";
import NewSong from "../NewSong";
import Albums from "../Albums";

const Album = ({ albums }) => {
  const { id, albumId } = useParams();
  const dispatch = useDispatch();

  // if (!album) {
  //   return null;
  // }

  return (
    <div id="album-container">
      <h2 id="album-looker">Look at these songs!</h2>
      {!albums && <h3>Loading...</h3>}
      {albums &&
        Albums.map((song) => {
          return <Song key={song.id} />;
        })}

      <NewSong />
    </div>
  );
};

export default Album;
