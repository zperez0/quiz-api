import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SelectField from "./SelectField";
import TextFieldComp from "./TextFieldComp";

const Settings = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Typography variant="h2" fontWeight="bold">
        Quiz
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField label="Category" />
        <SelectField label="Difficulty" />
        <SelectField label="Type" />
        <TextFieldComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Start
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Settings;
