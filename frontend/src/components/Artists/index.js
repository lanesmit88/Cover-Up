import "./index.css";

import { fetch } from "../../store/csrf";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import {fetchAllArtists} from '../../store/artists'

const Artist = ({ artist }) => {
  console.log(artist)
  return (
    <div>
      <h3>{artist.artistName}</h3>
      <img src={artist.profilePhoto}/>
    </div>
  );
};

const Artists = () => {
  const dispatch = useDispatch();
  const artists = useSelector( reduxState => {
    return reduxState.artists;
  })

  useEffect(async () => {
    // const res = await fetch("/api/artists");
    // setArtists(res.data.artists);
    dispatch(fetchAllArtists());
  }, []);

  return (
    <div id="artists-container">
      <h2>Look at these artists!</h2>
      {!artists && <h3>Loading...</h3>}
      {artists &&
        artists.map((artist) => {
          return  <Artist artist={artist} />
        })}
       
    </div>
  );
};

export default Artists;
