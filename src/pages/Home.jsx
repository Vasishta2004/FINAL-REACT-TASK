import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>🎓 Student Management System</h1>

      <p>
        Manage student information easily and efficiently.
      </p>

      <Link to="/students" className="main-btn">
        View Students
      </Link>

      <Link to="/add-student" className="main-btn second">
        Add Student
      </Link>
    </div>
  );
}

export default Home;