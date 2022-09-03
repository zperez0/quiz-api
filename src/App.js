import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from "./components/Settings";
import Questions from "./components/Questions";
import FinalScore from "./components/FinalScore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Settings />} />
        <Route path="/questions" element={ <Questions />} />
        <Route path="/score" element={<FinalScore />} />
      </Routes>
    </Router>
  );
}

export default App;
