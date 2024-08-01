import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface Student {
  name: string;
  RegisterNo: string;
  English: string;
  Science: string;
  Math: string;
  mark: string;
}

const StudentTable: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(() => {
    const savedStudents = localStorage.getItem("studentsTable");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });
  const [student, setStudent] = useState<Student>({
    name: "",
    RegisterNo: "",
    mark: "",
    English: "",
    Science: "",
    Math: "",
  });

  useEffect(() => {
    localStorage.setItem("studentsTable", JSON.stringify(students));
  }, [students]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const calculateTotal = (student: Student) => {
    const total =
      Number(student.English) + Number(student.Science) + Number(student.Math);
    return total.toString();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (student.name && student.RegisterNo) {
      const totalMark = calculateTotal(student);
      setStudents((prevStudents) => [
        ...prevStudents,
        { ...student, mark: totalMark },
      ]);
      setStudent({
        name: "",
        RegisterNo: "",
        mark: "",
        English: "",
        Science: "",
        Math: "",
      });
    }
  };

  return (
    <div className="container">
      <h1>Student Marks Table</h1>
      <form onSubmit={handleSubmit} className="student-form">
        <label>Student-Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Enter student name"
          className="input"
        />
        <label>RegisterNo:</label>
        <input
          type="text"
          name="RegisterNo"
          value={student.RegisterNo}
          onChange={handleChange}
          placeholder="Enter RegisterNo"
          className="input"
        />
        <label>English:</label>
        <input
          type="number"
          name="English"
          value={student.English}
          onChange={handleChange}
          placeholder="Enter English mark"
          className="input"
        />
        <label>Science:</label>
        <input
          type="number"
          name="Science"
          value={student.Science}
          onChange={handleChange}
          placeholder="Enter Science mark"
          className="input"
        />
        <label>Math:</label>
        <input
          type="number"
          name="Math"
          value={student.Math}
          onChange={handleChange}
          placeholder="Enter Math mark"
          className="input"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Register-No</th>
            <th>English</th>
            <th>Science</th>
            <th>Math</th>
            <th>Total-mark</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.RegisterNo}</td>
              <td>{student.English}</td>
              <td>{student.Science}</td>
              <td>{student.Math}</td>
              <td>{student.mark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
