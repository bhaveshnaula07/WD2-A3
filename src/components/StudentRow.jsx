import { useState } from "react";

function StudentRow({ student, index, onUpdateScore }) {
  const [inputScore, setInputScore] = useState(student.score);

  const isPassing = student.score >= 40;

  const handleUpdate = () => {
    if (inputScore === "" || isNaN(inputScore)) return;
    onUpdateScore(student.id, inputScore);
  };

  return (
    <tr className="student-row">
      <td className="td-index">{index}</td>
      <td className="td-name">{student.name}</td>
      <td className="td-score">{student.score}</td>
      <td className="td-update">
        <div className="update-group">
          <input
            type="number"
            className="score-input"
            value={inputScore}
            min="0"
            max="100"
            onChange={(e) => setInputScore(e.target.value)}
          />
          <button className="update-btn" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </td>
      <td className="td-status">
        <span className={`status-badge ${isPassing ? "pass" : "fail"}`}>
          {isPassing ? "✓ Pass" : "✗ Fail"}
        </span>
      </td>
    </tr>
  );
}

export default StudentRow;