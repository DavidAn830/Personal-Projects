import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import PortfolioPage from "./Components/PortfolioPage";
import { Tabs, Tab } from "@material-ui/core";
import React from "react";

function App() {
  // const [value, setValue] = React.useState(0);
  // const handleChange = (e, newVal) => {
  //   setValue(newVal);
  // };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
      </Routes>
      {/* <Tabs value={value} onChange={handleChange}>
        <Tab label="first" />
        <Tab label="first" />
        <Tab label="first" />
      </Tabs> */}
    </div>
  );
}

export default App;
