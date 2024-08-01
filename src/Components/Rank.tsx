import React, { useEffect, useState } from "react";

const Rank: React.FC = () => {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("studentsTable");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem("studentsTable", JSON.stringify(students));
  }, [students]);
  const sortedStudents = [...students].sort(
    (a, b) => Number(b.mark) - Number(a.mark)
  );

  return (
    <div className="rank-container">
      <h1>Rank Info</h1>
      <table className="rank-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Register-No</th>
            <th>Total-mark</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.RegisterNo}</td>
              <td>{student.mark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rank;
