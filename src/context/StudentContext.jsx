import { createContext, useContext, useState } from "react";
import studentsData from "../data/students";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(studentsData);

  const addStudent = (student) => {
    setStudents((previousStudents) => [
      ...previousStudents,
      {
        ...student,
        id: Date.now()
      }
    ]);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}