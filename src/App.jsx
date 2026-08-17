import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Services from "./pages/services/Services";
import Maintenance from "./pages/services/Maintenance";
import Insurance from "./pages/services/Insurance";
import Finance from "./pages/services/Finance";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetails />} />

          <Route path="/services" element={<Services />}>
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="insurance" element={<Insurance />} />
            <Route path="finance" element={<Finance />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={<h2 className="not-found">Page Not Found</h2>}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;