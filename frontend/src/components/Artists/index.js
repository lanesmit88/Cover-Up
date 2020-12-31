import "./index.css";

// import { fetch } from "../../store/csrf";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import {fetchAllArtists} from '../../store/artists'

const Artist = ({ artist }) => {
  return (
    <div className="each-artist-container">
      <NavLink to={`/artists/${artist.id}`}>
      <h3>{artist.artistName}</h3>
      </NavLink>
      {artist.profilePhoto && <img src={artist.profilePhoto}/>}
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
      //Look here 
        artists.map((artist) => {
          return  <Artist artist={artist} key={artist.id}/>
        })}
    </div>
  );
};

export default Artists;





// Made a redux reducer to fetch all of my artists. Made a route for all the artists with links to there pages also styled it. 


// Make a profile page for each unique artist showing all of their albums. CRUD for albums.


// struggling with making a redux reducer to fetch the data from a single artist.




