import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/students/:id"
          element={<StudentDetails />}
        />

        <Route
          path="/add-student"
          element={<AddStudent />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;