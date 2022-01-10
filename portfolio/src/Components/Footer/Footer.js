import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import github from "../../images/github.svg";
import email from "../../images/email.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="media">
        <div className="instagram responsive-img">
          <a href="https://www.instagram.com/tya830_/" target="_blank">
            <img src={instagram} />
          </a>
        </div>
        <div className="github responsive-img">
          <a href="https://github.com/DavidAn830" target="_blank">
            <img src={github} />
          </a>
        </div>
      </div>

      <div className="copyright">
        <div>David An &copy; 2021</div>
      </div>
    </div>
  );
};

export default Footer;
