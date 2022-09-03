import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);

  const handleReturnHome = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(10));
    navigate("/");
  };
  return (
    <Box mt={3}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleReturnHome} variant="outlined">
        return home
      </Button>
    </Box>
  );
};

export default FinalScore;
