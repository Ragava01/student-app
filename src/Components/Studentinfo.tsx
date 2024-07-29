import React, { useState, useEffect } from "react";

type StudentType = {
  name: string;
  register: string;
};

export default function Student() {
  const [students, setStudents] = useState<StudentType[]>(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });
  const [name, setName] = useState<string>("");
  const [register, setRegister] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleAddStudent = () => {
    const newStudent: StudentType = { name, register };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    setName("");
    setRegister("");
  };

  return (
    <div className="in">
      <h1>Student List</h1>
      <label>Student-Name:</label>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Register-No:</label>
      <input
        type="text"
        placeholder="Register-No"
        value={register}
        onChange={(e) => setRegister(e.target.value)}
      />
      <br />
      <button onClick={handleAddStudent}>Submit</button>

      {/* <ul>
        {students.map((student, index) => (
          <li key={index}>
            <label>Student-Name: {student.name}</label>
            <label>Register-No: {student.register}</label>
            <br />
          </li>
        ))}
      </ul> */}
    </div>
  );
}
