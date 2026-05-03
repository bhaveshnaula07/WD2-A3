import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

const initialStudents = [
  { id: 1, name: "Virat Kohli", score: 95 },
  { id: 2, name: "Rohit Sharma", score: 20 },
  { id: 3, name: "PM Modi", score: 99 },
  { id: 4, name: "Narendra Modi", score: 100 },
  { id: 5, name: "Amit Shah", score: 90 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const updateScore = (id, newScore) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, score: Number(newScore) } : s))
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <StudentTable students={students} onUpdateScore={updateScore} />
        <AddStudentForm onAddStudent={addStudent} />
      </main>
    </div>
  );
}

export default App;


