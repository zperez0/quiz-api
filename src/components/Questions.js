import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";

const Questions = () => {
  const { 
    question_category,
    question_difficulty,
    question_type,
    question_amount,
  } = useSelector(state => state);
  console.log( question_category, question_difficulty, question_type )

  let apiUrl = `/api.php?amount=10`

  const { response, loading } = useAxios({ url: apiUrl })

  return (
    <Box>
      <Typography variant="h4">Questions 1</Typography>
      <Typography mt={5}>question goes here</Typography>
      <Box mt={2}>
        <Button variant="contained">Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 2</Button>
      </Box>
      <Box mt={5}>Score: 2 / 6</Box>
    </Box>
  );
};

export default Questions;
