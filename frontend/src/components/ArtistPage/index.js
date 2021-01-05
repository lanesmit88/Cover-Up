import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Albums from "../Albums";

import { fetchArtistData } from "../../store/artist";

const ArtistPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const artist = useSelector((reduxState) => {
    return reduxState.artist.artist;
  });

  useEffect(async () => {
    // const res = await fetch("/api/artists");
    // setArtists(res.data.artists);
    dispatch(fetchArtistData(id));
  }, []);

  if(!artist) {
    return null
  }


  return (
    <div id="artist-page-container">
      <div id="artist-page-header">
        <div>

          <img id="artist-profile-photo" src={artist.profilePhoto} alt="" />

        </div>
        <div id="artist-header-text">
          <h1 id="artist-page-name">{artist.artistName}</h1>
          <h3>Location: {artist.location}</h3>
          <h5>Bio: {artist.bio}</h5>
        </div>
      </div>
      <div id="artist-page-albums">
        <Albums />
      </div>
    </div>
  );
};

export default ArtistPage;
