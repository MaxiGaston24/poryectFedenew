import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import image from "../Components/image.png";

// menu
// import DrawerItem from "./DrawerItem";
// rotas
// import { Link } from "react-router-dom";

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//rotas
const itemList = [
  {
    text: "+54 9 261 467 9214",
    to: "/",
  },
  {
    text: "hola@sinCo2.com.ar",
    to: "/",
  },
];

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        height: "104px",
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Typography variant="h6" component="h2">
          <img
            src={image}
            alt="headerImg"
            style={{
              width: "30%",
              marginBottom: -15,
            }}
          />
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          {/* <DrawerItem /> */}
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  //   component={Link}
                  //   to={item.to}
                  sx={{
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "transparent",
                      //   color: "#1e2a5a",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
