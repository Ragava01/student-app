import React from "react";
import { useStudents } from "./StudentsContext";

const Rank: React.FC = () => {
  const { students } = useStudents();
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
