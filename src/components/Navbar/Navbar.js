import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomizedBadges from "./CustomizedBadges";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import "./Navbar.css";
import DrawerNav from "./DrawerNav";

const CustomButton = styled(Button)({
  color: "#fff",
  padding: "0 20px",
  "&:hover": {
    color: "#FF6701",
    transition: "all .3s ease-in-out",
  },
});

const CustomLink = styled(Link)({
  textDecoration: "none",
});
// #040303

function Navbar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar sx={{ background: "#040303" }}>
      <Toolbar>
        <img src="./images/logo.png" className="logo" alt=""></img>
        {isMatch ? (
          <>
            <div style={{ marginLeft: "1rem" }}>
              <CustomizedBadges />
            </div>
            <DrawerNav />
          </>
        ) : (
          <>
            {/* {
              PAGES.map((page,index)=> ())
            } */}
            <CustomLink to="/">
              <CustomButton>Home</CustomButton>
            </CustomLink>
            <CustomLink to="/products">
              <CustomButton>Products</CustomButton>
            </CustomLink>
            <CustomLink to="/upcominggames">
              <CustomButton>upcoming games</CustomButton>
            </CustomLink>
            <div style={{ marginLeft: "1rem", marginBottom: "0.2rem" }}>
              <CustomizedBadges />
            </div>
            <CustomButton
              sx={{ marginLeft: "auto" }}
              variant="contained"
              color="grey"
            >
              Login
            </CustomButton>
            <CustomButton
              sx={{ marginLeft: "1rem" }}
              variant="contained"
              color="grey"
            >
              SignUp
            </CustomButton>{" "}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
