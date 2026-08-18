import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useStudents } from "../context/StudentContext";

function AddStudent() {
  const { addStudent } = useStudents();

  const navigate = useNavigate();

  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const courseId = useId();
  const cityId = useId();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    city: ""
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.course ||
      !form.city
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (form.phone.length !== 10) {
      setError("Phone number must contain 10 digits.");
      return;
    }

    addStudent({
      ...form,
      year: "First Year"
    });

    alert("Student added successfully!");

    navigate("/students");
  };

  return (
    <div className="form-container">
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor={nameId}>
          Student Name
        </label>

        <input
          id={nameId}
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor={emailId}>
          Email
        </label>

        <input
          id={emailId}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor={phoneId}>
          Phone
        </label>

        <input
          id={phoneId}
          name="phone"
          type="text"
          value={form.phone}
          onChange={handleChange}
        />

        <label htmlFor={courseId}>
          Course
        </label>

        <select
          id={courseId}
          name="course"
          value={form.course}
          onChange={handleChange}
        >
          <option value="">
            Select Course
          </option>

          <option value="Computer Science">
            Computer Science
          </option>

          <option value="Information Technology">
            Information Technology
          </option>

          <option value="Mechanical">
            Mechanical
          </option>

          <option value="Civil Engineering">
            Civil Engineering
          </option>

          <option value="Electronics">
            Electronics
          </option>
        </select>

        <label htmlFor={cityId}>
          City
        </label>

        <input
          id={cityId}
          name="city"
          type="text"
          value={form.city}
          onChange={handleChange}
        />

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <button type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;