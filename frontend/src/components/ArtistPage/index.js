import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Albums from "../Albums";

import { fetchArtistData } from "../../store/artist";

const ArtistPage = () => {
  const { artistId } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector((reduxState) => {
    return reduxState.artist.albums;
  });


  useEffect(async () => {
    dispatch(fetchArtistData(artistId));
  }, []);

  if (!albums) {
    return null;
  }

  return (
    <div id="artist-page-container">
      <div id="artist-page-header">
        <div>
          <img id="artist-profile-photo" src={albums[0].User.profilePhoto} alt="" />
        </div>
        <div id="artist-header-text">
          <h1 id="artist-page-name">{albums[0].User.artistName}</h1>
          <h3>Location: {albums[0].User.location}</h3>
          <h5>Bio: {albums[0].User.bio}</h5>
        </div>
      </div>
      <div id="artist-page-albums">
        <Albums albums={albums} />
      </div>
    </div>
  );
};

export default ArtistPage;
