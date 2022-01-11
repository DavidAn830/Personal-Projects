import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "@material-ui/icons/Work";
import "react-vertical-timeline-component/style.min.css";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-title-container">
        <div className="experience-title">EXPERIENCE</div>
      </div>
      <div className="career-container">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#353239" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2019 - Present"
            iconStyle={{ background: "#C3A3A1", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">React Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">TeachStone</h4>
            <div className="small-skills-container">
              <div className="small-skills">MERN</div>
              <div className="small-skills">JavaScript</div>
              <div className="small-skills">HTML5</div>
              <div className="small-skills">CSS3</div>
              <div className="small-skills">Babel</div>
              <div className="small-skills">Webpack</div>
              <div className="small-skills">Scss</div>
              <div className="small-skills">Node.js</div>
              <div className="small-skills">Express</div>
              <br />
              <div className="small-skills">Agile/Scrum</div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#353239" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2017 - 2019"
            iconStyle={{ background: "#C3A3A1", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Gizmos</h4>
            <div className="small-skills-container">
              <div className="small-skills">React</div>
              <div className="small-skills">Bootstrap</div>
              <div className="small-skills">JavaScript</div>
              <div className="small-skills">HTML5</div>
              <div className="small-skills">CSS3</div>
              <div className="small-skills">Redux</div>
              <div className="small-skills">React Router</div>
              <div className="small-skills">Scss</div>
              <div className="small-skills">GIT</div>
              <div className="small-skills">Agile/Scrum</div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#353239" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2016 - 2017"
            iconStyle={{ background: "#C3A3A1", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">TNSOnline</h4>
            <div className="small-skills-container">
              <div className="small-skills">MERN</div>
              <div className="small-skills">Bootstrap</div>
              <div className="small-skills">JavaScript</div>
              <div className="small-skills">HTML5</div>
              <div className="small-skills">CSS3</div>
              <div className="small-skills">React Router</div>
              <div className="small-skills">RESful API</div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "#C3A3A1", color: "#fff" }}
            icon={<HourglassFullIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
