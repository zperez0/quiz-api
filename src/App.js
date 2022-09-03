import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings";
import Questions from "./components/Questions";
import FinalScore from "./components/FinalScore";
import { Container, Box } from "@mui/system";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScore />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
