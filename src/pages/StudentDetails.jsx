import { Link, useParams } from "react-router-dom";

import { useStudents } from "../context/StudentContext";

function StudentDetails() {
  const { id } = useParams();

  const { students } = useStudents();

  const student = students.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return (
      <div className="center">
        <h2>Student Not Found</h2>

        <Link to="/students">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="details">
      <div className="large-icon">
        👨‍🎓
      </div>

      <h1>{student.name}</h1>

      <p>
        <strong>Email:</strong> {student.email}
      </p>

      <p>
        <strong>Phone:</strong> {student.phone}
      </p>

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
        to="/students"
        className="details-btn"
      >
        ← Back to Students
      </Link>
    </div>
  );
}

export default StudentDetails;