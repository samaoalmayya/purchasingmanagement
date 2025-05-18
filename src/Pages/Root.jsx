/* eslint-disable no-unused-vars */
// @ts-nocheck
import { Box } from "@mui/material";
import * as React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "src/Muicomponent/AppBar";
import Drawarv from "src/Muicomponent/Drawar";
import CssBaseline from "@mui/material/CssBaseline";
// @ts-ignore
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { teal } from "@mui/material/colors";
import getDesignTokens from "../Style/Theem";
const drawerWidth = 240;

const Root = () => {
  const [mode, setmyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  // eslint-disable-next-line no-unused-vars
  const [noneOrBlock, setnoneOrBlock] = useState("none");
  const [drawarType, setdrawarType] = useState("persistent");

  const showDrawar = () => {
    setnoneOrBlock("block");
    setdrawarType("temporary");
  };
  const hideDrawar = () => {
    setnoneOrBlock("none");
    setdrawarType("permanent");
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} showDrawar={showDrawar}></Appbar>
        <Drawarv
          hideDrawar={hideDrawar}
          drawerWidth={drawerWidth}
          setmyMode={setmyMode}
          noneOrBlock={noneOrBlock}
          drawarType={drawarType}
        >
          {" "}
        </Drawarv>

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
