import React, { useState, ChangeEvent, FormEvent } from 'react';


interface Student {
  name: string;
  English: string;
  Science: string;
  Math:string
  mark: string;
}

const StudentTable: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [student, setStudent] = useState<Student>({ name: '', mark: '', English: '', Science: '', Math: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: name === 'mark' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (student.name && student.mark) {
      setStudents((prevStudents) => [...prevStudents, student]);
      setStudent({ name: '', mark: '', English: '', Science: '', Math: '' });
    }
  };

  function Total(){
    const sum=0;
  }
  
  return (
    <div className="in">
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
        <label>Mark:</label>
        <input
          type="number"
          name="mark"
          value={student.mark}
          onChange={handleChange}
          placeholder="Enter student mark"
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
        <button type="submit">Submit</button>
      </form>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mark</th>
            <th>English</th>
            <th>Science</th>
            <th>Math</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.mark}</td>
              <td>{student.English}</td>
              <td>{student.Science}</td>
              <td>{student.Math}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
