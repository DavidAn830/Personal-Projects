import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import PortfolioPage from "./Components/PortfolioPage";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
      </Routes>
      {/* <Navigation />
      <Footer /> */}
    </div>
  );
}

export default App;
