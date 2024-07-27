import React, { useState, useEffect } from "react";

type StudentType = {
  name: string;
  register: string;
};

export default function Student() {
  const [students, setStudents] = useState<StudentType[]>([]);
  const [name, setName] = useState<string>("");
  const [register, setregister] = useState<string>("");

  useEffect(() => {
    handleLoadStudents();
  }, []);

  const handleAddStudent = () => {
    const newStudent: StudentType = { name, register };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    setName("");
    setregister("");
  };

  const handleLoadStudents = () => {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
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
        type="number"
        placeholder="Register-No"
        value={register}
        onChange={(e) => setregister(e.target.value)}
      />
      <br />
      <button  onClick={handleAddStudent}>Sumbit</button>

      {/* <ul>
        {students.map((student, index) => (
          <ol key={index}>
            <label>Student-Name: {student.name}</label>
            <label>Register-No: {student.register}</label>
            <label>Mark: {student.mark}</label>
            <br />
          </ol>
        ))}
      </ul> */}
    </div>
  );
}
