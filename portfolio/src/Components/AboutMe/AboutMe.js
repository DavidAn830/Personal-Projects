import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-title-container">
        <div className="about-me-title">ABOUT ME</div>
      </div>
      <div className="info-container">
        <div className="profile-card-container">
          <div className="profile-card"></div>
        </div>
        <div className="introduction-container">
          <div className="introduction-bar">
            <span className="dots red" />
            <span className="dots yellow" />
            <span className="dots green" />
          </div>
          <div className="introduction">
            Hi, I am David An and I have 5 years of professional experience in
            front-end development. I also have an experience of dealing with
            back-end programming using Express and Node.js. I am proficient in
            JavaScript, CSS/CSS3/Scss, HTML/HTML5, React, and Java. I am also
            very familiar with modern front-end libraries such as Redux, React
            Router, jQuery, Axios and etc. Over the years of my professional
            experience, I achieved bachelor of science degree in computer
            science at James Madison University last year. I am excited for an
            opportunity to continue learning and develop my career.
            <br />
            <br />
            If you would like to contact me, please email me at
            'davidan98.dev@gmail.com'
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
