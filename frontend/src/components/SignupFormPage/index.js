import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isArtist, setIsArtist] = useState(false);
  const [location, setLocation] = useState("")
  const [bio, setBio] = useState("")
  const [profilePhoto, setProfilePhoto] = useState("")
  const [artistName, setArtistName] = useState("")
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;
  const handleClick = () => setIsArtist(!isArtist);
  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password, isArtist, location, bio, profilePhoto, artistName }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <h1 id="signupHeader">Sign Up</h1>
      <form id="signupForm" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="signupLabels">
          Email
          <input
            className="signupInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="signupLabels">
          Username
          <input
            className="signupInput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="signupLabels">
          Artist?
          <input
            className="signupInput"
            id="signupIsArtistInput"
            type="checkbox"
            checked={isArtist}
            onChange={handleClick}
            required
          />
        </label>
        <label className="signupLabels">
          Location
          <input
            className="signupInput"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label className="signupLabels">
          Bio:
          <textarea
            className="signupInput"
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        <label className="signupLabels">
          Profile Photo URL
          <input
            className="signupInput"
            type="text"
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.value)}
          />
        </label>
        <label className="signupLabels">
          Artist Name
          <input
            className="signupInput"
            type="text"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            required
          />
        </label>
        <label className="signupLabels">
          Password
          <input
            className="signupInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="signupLabels">
          Confirm Password
          <input
            className="signupInput"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" id="signupSubmitButton">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignupFormPage;
