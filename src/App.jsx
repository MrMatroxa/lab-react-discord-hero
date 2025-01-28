// src/App.jsx
import "./App.css";
import logo from "./assets/discord-logo-white.png";
import background from "./assets/discord-background.png";
import menuIcon from "./assets/menu-icon.png";
import PropTypes from "prop-types";

function Navbar() {
  return (
    <nav>
      <Img src={logo} alt="logo image" />
      <Img src={menuIcon} alt="menu icon" />
    </nav>
  );
}

function Img({ src, alt, id }) {
  return <img src={src} alt={alt} id={id} />;
}

function Button({ text }) {
  return <button>{text}</button>;
}

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <h1>IMAGINE A PLACE...</h1>
      <p>
        Discord is great for playing games and chilling with friends, or even
        building a worldwide community. Customise your own space to talk, play,
        and hang out.
      </p>
      <div id="buttons">
        <Button text="Download for Mac" />
        <Button text="Open Discord in your browser" />
      </div>
      <div id="background-image">
      <Img src={background} />
      </div>
    </div>
  );
}

export default App;

// prop types
Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
};

Button.propTypes = {
  text: PropTypes.string,
};
