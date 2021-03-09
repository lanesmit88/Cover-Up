import "./index.css";

// import { fetch } from "../../store/csrf";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import {fetchAllArtists} from '../../store/artists'

const Artist = ({ artist }) => {
  return (
    <div className="each-artist-container">
      <NavLink to={`/artists/${artist.id}`}>
      <h3>{artist.artistName}</h3>
      </NavLink>
      {artist.profilePhoto && <img src={artist.profilePhoto} alt="" />}
    </div>
  );
};

const Artists = () => {
  const dispatch = useDispatch();
  const artists = useSelector( (reduxState) => {
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
          return  <Artist artist={artist} key={artist.id}/>
        })}
    </div>
  );
};

export default Artists;


