import React from "react";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

const NoPage = () => {
  const theem = useTheme();
  return (
    <Box>
      <Typography variant="h3" color={theem.palette.error.main}>
        Not Found this page Now <br></br>
        Please try again later
      </Typography>
    </Box>
  );
};

export default NoPage;
