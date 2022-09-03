import React, { useState } from 'react'
import { Box } from "@mui/system";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function SelectField(props) {
  const { label } = props;
  const [value, setValue] = useState("");
  
  function handleChange(){

  }
  return (
    <Box mt={3} width="100%" >
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          <MenuItem>Option1</MenuItem>
          <MenuItem>Option2</MenuItem>
          <MenuItem>Option3</MenuItem>
        </Select>
      </FormControl>

    </Box>
  )
}

export default SelectField