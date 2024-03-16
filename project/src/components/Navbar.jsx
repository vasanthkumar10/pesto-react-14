import {
  AppBar,
  Avatar,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";

function Navbar() {
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ cursor: "pointer" }}
            variant="h6"
            fontWeight={"bold"}
          >
            Pesto
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Typography
              sx={{ cursor: "pointer" }}
              variant="h6"
              fontWeight={"bold"}
            >
              Home
            </Typography>
            <Avatar src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
