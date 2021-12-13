import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <FontAwesomeIcon icon={faReact} />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
