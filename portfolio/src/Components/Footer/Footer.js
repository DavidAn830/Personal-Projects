import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import email from "../../images/email.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="media">
        <div className="facebook responsive-img">
          <a href="https://www.facebook.com/taeyoung.an.39">
            <img src={facebook} />
          </a>
        </div>
        <div className="instagram responsive-img">
          <a href="https://www.instagram.com/tya830_/">
            <img src={instagram} />
          </a>
        </div>
        <div className="linkedin responsive-img">
          <a href="#">
            <img src={linkedin} />
          </a>
        </div>
        <div className="email responsive-img">
          <a href="#">
            <img src={email} />
          </a>
        </div>
      </div>

      <div className="contact-info">
        <div className="personal-contact">
          <h4>Phone: 571 - 302 - 1809</h4>
        </div>
        <div className="personal-email">
          <h4>Email: taean2084@gmail.com</h4>
        </div>
      </div>

      <div className="footer-row">
        <div className="copyright">
          <h4>Copyright &copy; 2021</h4>
          <h4>VA</h4>
        </div>

        <div className="footer-nav">
          <a className="resume-footer" href="#">
            Home
          </a>
          <a className="resume-footer" href="#">
            Contact
          </a>
          <a className="resume-footer" href="#">
            Portfolio
          </a>
          <a className="resume-footer" href="#">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
