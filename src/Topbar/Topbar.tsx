import React from "react";
import image from "../Components/image.png";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

const Topbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingX: "50px",
        columnGap: "10px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <div style={{ margin: "5px" }}>
        <img src={image} alt="" height="100px" width="175px" />
      </div>
      <div style={{ display: "grid", columnGap: "10px", marginTop: "20px" }}>
        <div style={{ fontWeight: "bold", cursor: "pointer" }}>
          +54 9 261 467 9214
        </div>
        <div style={{ fontWeight: "bold", cursor: "pointer" }}>
          hola@sinCo2.com.ar
        </div>
      </div>
    </Box>
  );
};

export default Topbar;
