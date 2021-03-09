import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/Home";
import Artists from "./components/Artists"
import ArtistPage from "./components/ArtistPage"
import Album from "./components/Album"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/artists/:artistId/:albumId/:songId">
            <Album />
          </Route>
          <Route path="/artists/:artistId/:albumId">
            <Album />
          </Route>
          <Route path="/artists/:artistId">
            <ArtistPage />
          </Route>
          <Route path="/artists">
            <Artists />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
