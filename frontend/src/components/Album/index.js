import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbumData } from "../../store/album";
import { addSong } from "../../store/artist";
import Song from "../Song";
import NewSong from "../NewSong";

const Album = () => {
  const dispatch = useDispatch();
  const { artistId, albumId } = useParams();
  const album = useSelector((reduxState) => {
    return reduxState.album;
  });

  useEffect(async () => {
    dispatch(fetchAlbumData(artistId, albumId));
  }, []);

  return (
    <div id="album-container">
      <h2 id="album-looker">Look at these songs!</h2>
      {!album && <h3>Loading...</h3>}
      {album.Songs &&
        album.Songs.map((song) => {
          return (
            <Song
              key={song.id}
              song={song}
              albumId={albumId}
              artistId={artistId}
            />
          );
        })}
      <NewSong />
    </div>
  );
};

export default Album;
