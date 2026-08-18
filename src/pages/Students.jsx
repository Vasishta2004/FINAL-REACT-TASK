import { useSearchParams } from "react-router-dom";

import StudentCard from "../components/StudentCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import { useStudents } from "../context/StudentContext";
import useFetch from "../hooks/useFetch";

function Students() {
  const { students } = useStudents();

  const [searchParams, setSearchParams] =
    useSearchParams();

  const search =
    searchParams.get("search") || "";

  const {
    data,
    loading,
    error
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.course} ${student.city}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleSearch = (event) => {
    const value = event.target.value;

    if (value) {
      setSearchParams({
        search: value
      });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="container">
      <h1>Students</h1>

      <input
        className="search"
        type="text"
        placeholder="Search student, course or city..."
        value={search}
        onChange={handleSearch}
      />

      <p>
        Showing {filteredStudents.length} students
      </p>

      <div className="student-grid">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>

      <div className="api-section">
        <h2>API Integration</h2>

        {loading && <Loading />}

        {error && (
          <ErrorMessage message={error} />
        )}

        {data && !loading && !error && (
          <p>
            API connected successfully.
            Received {data.length} users.
          </p>
        )}
      </div>
    </div>
  );
}

export default Students;