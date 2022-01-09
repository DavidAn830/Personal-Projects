import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Tabs, Tab, Box } from "@material-ui/core";
import React, { useEffect } from "react";

const Navigation = () => {
  const { page } = params;
  console.log(page);
  const tabNameToIndex = {
    0: "home",
    1: "contact",
    2: "portfolio",
  };
  const indexToTabName = {
    home: 0,
    contact: 1,
    portfolio: 2,
  };

  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <FontAwesomeIcon icon={faReact} />
      </div>
      <div className="nav-links">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="Contact" />
          <Tab label="Portfolio" />
        </Tabs>
      </div>
    </div>
  );
};

export default Navigation;
