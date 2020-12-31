import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { fetchArtistData } from "../../store/artists";

const ArtistPage = () => {
  const dispatch = useDispatch();
  const artist = useSelector((reduxState) => {
    return reduxState.artists;
  });
  console.log(artist);

  useEffect(async () => {
    // const res = await fetch("/api/artists");
    // setArtists(res.data.artists);
    dispatch(fetchArtistData());
  }, []);

  return (
    <div id="artist-page-container">
      <div id="artist-page-header">
        <div>
          <img src={artist.profilePhoto} />
        </div>
        <div id="artist-header-text">
          <h1>{artist.artistName}</h1>
          <h3>Location: {artist.location}</h3>
          <h5>Bio: {artist.bio}</h5>
        </div>
      </div>
      <div id="artist-page-albums">
      <h4>HGIIIIIIIIIIIIIIIIII</h4>
      </div>
    </div>
  );
};

export default ArtistPage;
