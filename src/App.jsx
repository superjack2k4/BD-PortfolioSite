import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import ProjectExtra from "./pages/ProjectExtra";
import Partner from "./pages/Partner";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/projectDetails" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectExtra" element={<ProjectExtra />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
