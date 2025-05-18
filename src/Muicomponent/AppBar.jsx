import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Avatar,
  Divider,
  Drawer,
  Link,
  Stack,
  Typography,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Appbar = ({ drawerWidth, showDrawar }) => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            onClick={() => {
              showDrawar();
            }}
            sx={{ display: { sm: "none" } }}
          >
            <Menu></Menu>
          </IconButton>
          <Link
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              "&:hover": { fontSize: "20px" },
            }}
            href="#"
            color="inherit"
          >
            My Expenses
          </Link>
          <Typography mr={1}>Samaoal Mayya</Typography>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Travis Howard" src="./Images/personalImage.jpg" />{" "}
            {/* ✅ */}
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
