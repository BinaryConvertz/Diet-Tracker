import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./AboutPage";
import DashboardPage from "./Dash";

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
