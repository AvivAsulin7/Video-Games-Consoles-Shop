import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import CustomizedBadges from "./CustomizedBadges";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import "./Navbar.css";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const CustomButton = styled(Button)({
  color: "#fff",
  padding: "0 20px 20px",
  "&:hover": {
    color: "#FF6701",
    transition: "all .3s ease-in-out",
  },
});

const CustomLink = styled(Link)({
  textDecoration: "none",
});

function Navbar() {
  return (
    <AppBar sx={{ background: "#040303" }}>
      <Toolbar>
        <div className="nav">
          <SportsEsportsIcon
            sx={{ margin: "10px 5px 0" }}
            fontSize="large"
          ></SportsEsportsIcon>
          <CustomLink to="/">
            <CustomButton>Home</CustomButton>
          </CustomLink>
          <CustomLink to="/products">
            <CustomButton>Products</CustomButton>
          </CustomLink>
          <CustomLink to="/upcominggames">
            <CustomButton>upcoming games</CustomButton>
          </CustomLink>
        </div>
        <div style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}>
          <CustomizedBadges />
        </div>

        <CustomButton
          sx={{ marginLeft: "auto", marginTop: "auto" }}
          variant="contained"
          color="grey"
        >
          Login
        </CustomButton>
        <CustomButton
          sx={{ marginLeft: "1rem", marginTop: "auto" }}
          variant="contained"
          color="grey"
        >
          SignUp
        </CustomButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
