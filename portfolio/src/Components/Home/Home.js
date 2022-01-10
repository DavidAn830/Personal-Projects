import "./Home.css";
import laptop from "../../images/laptop.svg";
import github from "../../images/github.svg";
import TypeWriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home-container">
      <div className="github-container">
        <a href="https://github.com/DavidAn830" target="_blank">
          <img src={github} />
        </a>
      </div>
      <div className="home-content-container">
        <img className="laptop-icon" src={laptop} />
        <h1 className="home-name">David An</h1>
        <div className="job-title">
          <TypeWriter
            options={{
              strings: [
                "REACT DEVELOPER",
                "WEB-DEVELOPER",
                "FRONT-END DEVELOPER",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
