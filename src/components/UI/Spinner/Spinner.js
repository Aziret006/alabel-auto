import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Spinner = ({ size }) => (
  <Box width="max-content" margin="50px auto">
    <CircularProgress color="orange" size={size} />
  </Box>
);

export default Spinner;
