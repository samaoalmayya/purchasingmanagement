// @ts-nocheck
import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import "./Create.css";
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import { ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.sam.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.sam.main,
    scale: 0.97,
  },
}));
const Create = () => {
  const [title, settitel] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();
  return (
    <Box noValidate autoCapitalize="off" component="form">
      <TextField
        onChange={(eo) => {
          settitel(eo.target.value);
        }}
        label="Transition Title"
        id="filled-start-adornment"
        sx={{
          mt: "80px",
          width: "25ch",
          mr: "35px",
          fontWeight: "500",
          fontSize: "1.4em",
          opacity: "0.8",
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">&#128072;</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />
      <br></br>
      <TextField
        onChange={(eo) => {
          setprice(Number(eo.target.value));
        }}
        label="Transition Title"
        id="filled-start-adornment"
        sx={{
          mt: "30px",
          width: "25ch",
          mr: "35px",
          fontWeight: "500",
          fontSize: "1.4em",
          opacity: "0.8",
        }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />
      <ColorButton
        onClick={(params) => {
          fetch("http://localhost:3100/myData", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, price }),
          }).then(() => {
            navigate("/");
          });
        }}
        sx={{ display: "block", mt: "20px" }}
        variant="contained"
      >
        Submit <ArrowForwardIos sx={{ fontSize: "10px" }}></ArrowForwardIos>
      </ColorButton>
    </Box>
  );
};
export default Create;
