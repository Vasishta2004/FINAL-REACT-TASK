import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <div className="student-icon">
        👨‍🎓
      </div>

      <h3>{student.name}</h3>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Year:</strong> {student.year}
      </p>

      <p>
        <strong>City:</strong> {student.city}
      </p>

      <Link
        to={`/students/${student.id}`}
        className="details-btn"
      >
        View Details
      </Link>
    </div>
  );
}

export default StudentCard;