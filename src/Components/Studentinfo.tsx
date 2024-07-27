export default function Studentinfo() {
  return (
    <div className="in">
      <label>Student name:</label>
      <input type="text" placeholder="Student Name" required />
      <br />
      <label>Register No:</label>
      <input type="number" placeholder="Register No" required />
      <br />
      <button className="btn">Submit</button>
    </div>
  );
}
