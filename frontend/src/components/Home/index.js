import "./index.css";
import logo from "./logo.png";
import logo2 from "./logo2.png";

import { useSelector } from "react-redux";

const Home = () => {
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });
  return (
    <div>
      <div id="home-page-container">
        <img id="logo2" src={logo2} alt="" />
        <img id="logo" src={logo} alt="" />
        <div id="home-page-overlay">
          <h1>Welcome to Cover Up</h1>
        </div>
        {loggedInUser && (
          <h3>Welcome Back, {loggedInUser.username}!</h3>
        )}
        {!loggedInUser && <h3>Thanks for stopping by. Find some songs to jam to!</h3>}
      </div>
    </div>
  );
};

export default Home;
