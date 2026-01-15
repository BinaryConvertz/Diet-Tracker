import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../PageComponents/Home";
import AboutPage from "../PageComponents/AboutPage";
import DashboardPage from "../PageComponents/Dash";

const Links = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<DashboardPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Links;
