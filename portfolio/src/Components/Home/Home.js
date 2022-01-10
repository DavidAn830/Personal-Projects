import "./Home.css";
import laptop from "../../images/laptop.svg";
import github from "../../images/github.svg";

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
        <p className="job-title">REACT DEVELOPER</p>
      </div>
    </div>
  );
};

export default Home;
