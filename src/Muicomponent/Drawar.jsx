import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useLocation, useNavigate } from "react-router-dom";
import { Divider, Drawer, List, useTheme, IconButton } from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Create,
  HomeFilled,
  Logout,
  Person3,
  Settings,
} from "@mui/icons-material";
const Drawarv = ({
  drawerWidth,
  setmyMode,
  noneOrBlock,
  drawarType,
  hideDrawar,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const Location = useLocation();
  // @ts-ignore
  const myList = [
    { text: "Home ", icon: <HomeFilled />, path: "/" },
    { text: "Create ", icon: <Create />, path: "/create" },
    { text: "Profile ", icon: <Person3 />, path: "/profile" },
    { text: "Setting ", icon: <Settings />, path: "/setting" },
  ];
  return (
    <div>
      <Drawer
        sx={{
          display: { xs: noneOrBlock, sm: "block" },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant={drawarType}
        anchor="left"
        open={true}
        onClose={() => {
          hideDrawar();
        }}
      >
        {/* <Button
          variant="contained"
          color="warning"
          onClick={() => {
            setmyMode(theme.palette.mode === "light" ? "dark" : "light");
          }}
        >
          text
        </Button> */}

        <List>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "center", mb: "15px" }}
          >
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "light" ? "dark" : "light"
                );
                setmyMode(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 sx={{ color: " rgb(38, 38, 112);" }} />
              )}
            </IconButton>
          </ListItem>

          <Divider />

          {myList.map((item) => {
            return (
              <ListItem
                key={item.text}
                sx={{
                  bgcolor:
                    Location.pathname === item.path
                      ? // @ts-ignore
                        theme.palette.sam.main
                      : null,
                }}
                disablePadding
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Drawarv;
