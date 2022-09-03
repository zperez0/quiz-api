import React from "react";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import SelectField from "./SelectField";
import TextFieldComp from "./TextFieldComp";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/questions");
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h2" fontWeight="bold">
        ✨Quiz Wizard✨
        </Typography>
        <form onSubmit={handleSubmit}>
          <SelectField options={response.trivia_categories} label="Category" />
          <SelectField options={difficultyOptions} label="Difficulty" />
          <SelectField options={typeOptions} label="Type" />
          <TextFieldComp />
          <Box mt={3} width="100%">
            <Button fullWidth variant="contained" type="submit">
              Start
            </Button>
          </Box>
        </form>
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
    <Typography variant="h5" fontWeight="bold" color={"white"} mb={1} >Welcome to the Quiz Wizard! </Typography>
    <Typography color={"white"} mb={3} >Are you smarter than a Wizard? Pick a category, difficulty, type, and amount. If you want to randomize your results just hit the 'START' button!</Typography>
      <Card variant="outlined" style={{ backgroundColor: "#f9f5f4" }}>{card}</Card>
    </>
  );
};

export default Settings;
