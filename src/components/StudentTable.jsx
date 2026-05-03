import StudentRow from "./StudentRow";

function StudentTable({ students, onUpdateScore }) {
  return (
    <section className="table-section">
      <h2 className="section-title">Students</h2>
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Score</th>
              <th>Update Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <StudentRow
                key={student.id}
                student={student}
                index={index + 1}
                onUpdateScore={onUpdateScore}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StudentTable;