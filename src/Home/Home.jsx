import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
const Home = () => {
  const handelDelete = (item) => {
    fetch(`http://localhost:3100/myData/${item.id}`, {
      method: "DELETE",
    });
    const newarr = mydata.filter((myobject) => {
      return myobject.id !== item.id;
    });
    setmydata(newarr);
  };

  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/myData")
      .then((Response) => Response.json())
      .then((data) => setmydata(data));
  }, []);
  let totalPrice = 0;
  return (
    <Box>
      {mydata.map((item) => {
        totalPrice += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "400px",

              display: "flex",
              justifyContent: "space-between",
              mt: "33px",
              pt: "28px",
              pb: "8px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                ml: "16px",
                fontSize: "1.4em",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mr: "35px",
                fontWeight: "500",
                fontSize: "1.4em",
                opacity: "0.8",
              }}
            >
              $ {item.price}
            </Typography>
            <IconButton
              onClick={() => {
                handelDelete(item);
              }}
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
              }}
            >
              <Close sx={{ fontSize: "20px" }}></Close>
            </IconButton>
          </Paper>
        );
      })}
      <Typography textAlign={"center"} pt={"10px"} variant="h6">
        {" "}
        You Spend ${totalPrice} &#128072;
      </Typography>
    </Box>
  );
};
export default Home;
