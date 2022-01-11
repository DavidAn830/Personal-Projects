import "./Portfolio.css";
import transaction from "../../images/transaction_monitoring.jpg";
import education from "../../images/education.jpg";
import gizmos from "../../images/gizmos.png";
import React from "react";
import { Modal, Typography, Fade, Backdrop, Box } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const Portfolio = () => {
  const [tnsOpen, setTnsOpen] = React.useState(false);
  const [teachStoneOpen, setTeachStoneOpen] = React.useState(false);
  const [gizmosOpen, setGizmosOpen] = React.useState(false);

  const handleTnsOpen = () => setTnsOpen(true);
  const handleTnsClose = () => setTnsOpen(false);
  const handleTeachStoneOpen = () => setTeachStoneOpen(true);
  const handleTeachStoneClose = () => setTeachStoneOpen(false);
  const handleGizmosOpen = () => setGizmosOpen(true);
  const handleGizmosClose = () => setGizmosOpen(false);
  return (
    <div className="portfolio-container">
      <div className="portfolio-title-container">
        <div className="portfolio-title">PROJECTS</div>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <img src={transaction} />
          <button className="more-btn" onClick={handleTnsOpen}>
            MORE
          </button>
        </div>
        <div className="project-card">
          <img src={education} />
          <button className="more-btn" onClick={handleTeachStoneOpen}>
            MORE
          </button>
        </div>
        <div className="project-card">
          <img src={gizmos} />
          <button className="more-btn" onClick={handleGizmosOpen}>
            MORE
          </button>
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={tnsOpen}
        onClose={handleTnsClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={tnsOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              TNS Online
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Transaction Network Services is one of the world’s leading
              payments connectivity providers and is trusted by hundreds of
              organizations to securely deliver more than 27 billion payments
              transactions each year. Customers utilizing the secure
              connectivity of TNS need to see the status of their connected
              devices, transactions, and files as they flow through the TNS
              network. TNSOnline provides the access needed to monitor the
              performance of our network and status of the secure files flowing
              through it. The key benefits of TNSOnline include real time
              performance portal, historical data reporting, and PCI compliance.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={teachStoneOpen}
        onClose={handleTeachStoneClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={teachStoneOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              myTeachStone
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              myTeachStone is an online platform designed to focus, measure, and
              improve teacher-child interactions - a key factor proven to drive
              children’s academic and life-long success. myTechstone promotes
              teacher growth by providing data-driven and individualized
              professional development. MyTeachstone gives teachers access to a
              growing and searchable library of research-based resources that
              target best practices in social/emotional learning, language and
              literacy skills, bi-ligual supports, and more; Extend teachers’
              learning by recommending resources that feature real classrooms,
              engage in discussion prompts, and track completion progress; Use
              observed data to identify and access formal professional
              development opportunities, responsive trainings, and online
              courses.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={gizmosOpen}
        onClose={handleGizmosClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={gizmosOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Gizmos
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              ExploreLearning Gizmos is the world’s largest library of
              interactive online simulations for math and science education in
              grades 3-12. Fun and easy to use, Gizmos help students develop a
              deep understanding of challenging concepts through inquiry and
              exploration. Students use Gizmos to interact with and explore
              hundreds of math and science topics ranging from heredity to
              trigonometry. Teachers use Gizmos as dynamic “what-if” tools to
              help students move beyond memorizing to true understanding. Each
              simulation is ideal for small group work, individual exploration,
              or whole class instruction using an LCD projector or interactive
              whiteboard. Assessment and reporting is also made easy with
              Gizmos. Students can immediately check their understanding and get
              helpful feedback after every Gizmo. Teachers can use real-time
              reporting of results to guide instructional decision making.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Portfolio;
