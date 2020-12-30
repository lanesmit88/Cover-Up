import "./index.css";

import { fetch } from "../../store/csrf";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Artist = ({ artist }) => {
  console.log(artist)
  return (
    <div>
      <h3>{artist.artistName}</h3>
      <img src={artist.photoUrl}/>
    </div>
  );
};

const Artists = () => {
  const [currentArtists, setArtists] = useState([]);

  useEffect(async () => {
    const res = await fetch("/api/artists");
    setArtists(res.data.artists);
  }, []);

  return (
    <div id="artists-container">
      <h2>Look at these artists!</h2>
      {!currentArtists && <h3>Loading...</h3>}
      {currentArtists &&
        currentArtists.map((artist) => {
          return  <Artist artist={artist} />
        })}
       
    </div>
  );
};

export default Artists;
