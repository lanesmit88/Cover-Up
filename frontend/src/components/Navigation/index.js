import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser}  />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul id="navbar">
      <li>
        <NavLink to="/users/:id" className="navbarElements">
          Profile
        </NavLink>
      </li>
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