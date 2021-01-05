import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchArtistData } from "../../store/artist";

const Album = ({ album }) => {
  return (
    <div className="each-album-container">
      {album.coverUrl && <img id="album-cover" src={album.coverUrl} alt="" />}
      <NavLink to={`/artists/2/${album.id}`}>
      <h1 id="album-names">{album.name}</h1>
      </NavLink>
      <p id="album-comments">{album.comments}</p>
    </div>
  );
};

const Albums = () => {

  const albums = useSelector((reduxState) => {
    return reduxState.artist.albums;
  });
  
  return (
    <div id="albums-container">
      <h2 id="albums-looker">Look at these albums!</h2>
      {/* {!albums && <h3>Loading...</h3>} */}
      {albums &&
        albums.map((album) => {
          return <Album album={album} key={album.id} />;
        })}
    </div>
  );
};


export default Albums;
