import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import { restoreUser } from "../../store/session";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <button>
          <NavLink to="/signup">Sign Up</NavLink>
        </button>
      </>
    );
  }

  useEffect(async () => {
    // const res = await fetch("/api/artists");
    // setArtists(res.data.artists);
    dispatch(restoreUser());
  }, []);
  return (
    <ul id="navbar">
      {sessionUser && (
        <li>
          <NavLink to={`/artists/${sessionUser.id}`} className="navbarElements">
            Profile
          </NavLink>
        </li>
      )}

      <li>
        <NavLink to="/artists" className="navbarElements">
          Artists
        </NavLink>
      </li>
      <li id="home-link-container">
        <NavLink exact to="/" className="navbarElements">
          Home Page
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
