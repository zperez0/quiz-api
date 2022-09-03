import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { handleScoreChange } from "../redux/actions";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    question_amount,
    score,
  } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${question_amount}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (event) => {
    const question = response.results[questionIndex];
    if (event.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h4">Question {questionIndex + 1}</Typography>
        <Typography mt={3}>
          {decode(response.results[questionIndex].question)}
        </Typography>
        {options.map((data, id) => (
          <Box mt={2} key={id}>
            <Button onClick={handleClickAnswer} variant="contained">
              {decode(data)}
            </Button>
          </Box>
        ))}
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box>
      <Card variant="outlined" style={{ backgroundColor: "#f9f5f4" }}>
        {card}
      </Card>
      <Box mt={5} color={"whitesmoke"}>
        <Card variant="outlined" style={{ backgroundColor: "#7d9e81" }}>
        <Typography variant="h5" m={1}>🧙‍♂️ Score: {score}</Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default Questions;
