import "./index.css";

import { useSelector } from "react-redux";

const Albums = () => {
  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });
  return (
    <div id="test-container">
        <h1 id="test">HIIIIIIIIIIIIII</h1>
    </div>
  );
};

export default Albums;
