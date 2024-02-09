import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ShahidCipher
      </Typography>
      <Link to="/">
        <Button
          color="inherit"
          style={{
            color: "#e743c9",
          }}
        >
          Home
        </Button>
      </Link>
      <Link to={"/login"}>
        <Button
          color="inherit"
          style={{
            color: "#9b59b6",
          }}
        >
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button
          color="inherit"
          style={{
            color: "#16a085",
          }}
        >
          Register
        </Button>
      </Link>
      <Link to="/ui">
        <Button
          color="inherit"
          style={{
            color: "#16a085",
          }}
        >
          UI
        </Button>
      </Link>
    </Toolbar>
  );
};

export default Header;
