import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter a student name.");
      return;
    }
    if (score === "" || isNaN(score) || score < 0 || score > 100) {
      setError("Please enter a valid score (0–100).");
      return;
    }
    onAddStudent(name.trim(), score);
    setName("");
    setScore("");
    setError("");
  };

  return (
    <section className="form-section">
      <h2 className="section-title">Add New Student</h2>
      <div className="form-card">
        {error && <p className="form-error">{error}</p>}
        <div className="form-group">
          <label className="form-label" htmlFor="studentName">
            Student Name
          </label>
          <input
            id="studentName"
            type="text"
            className="form-input"
            placeholder="e.g. John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="studentScore">
            Score (0–100)
          </label>
          <input
            id="studentScore"
            type="number"
            className="form-input"
            placeholder="e.g. 75"
            value={score}
            min="0"
            max="100"
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <button className="add-btn" onClick={handleSubmit}>
          + Add Student
        </button>
      </div>
    </section>
  );
}

export default AddStudentForm;