import "./index.css";
import logo from "./logo.png";

import { useSelector } from "react-redux";

const Home = () => {
    const loggedInUser = useSelector((state) => {
      return state.session.user;
    });
  return (
    <div>
      <div id="home-page-container">
        <img src={logo} />
        <div id="home-page-overlay">
          <h1>Welcome to Cover Up</h1>
        </div>
        {loggedInUser && (
          <h3>Welcome {loggedInUser.username}, find some songs to jam to!</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
