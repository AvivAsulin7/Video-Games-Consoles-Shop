import React, { useContext } from "react";
import { AppBar, Toolbar, Tabs, Typography, Tab, Button } from "@mui/material";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import CustomizedBadges from "./CustomizedBadges";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import "./Navbar.css";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ProductsContext from "../../contexts/ProductsContext";

const CustomLink = styled(Link)({
  color: "#fff",
  textDecoration: "none",
  "&:hover": {
    color: "#FF6701",
    transition: "all .3s ease-in-out",
  },
});

function Navbar() {
  const { showCart } = useContext(ProductsContext);
  return (
    <AppBar sx={{ background: "#040303" }}>
      <Toolbar>
        <Tabs textColor="inherit">
          <SportsEsportsIcon
            sx={{ margin: "auto" }}
            fontSize="large"
          ></SportsEsportsIcon>

          <CustomLink to="/">
            <Tab label="HOME"></Tab>
          </CustomLink>
          <CustomLink to="/products">
            <Tab label="PRODUCTS"></Tab>
          </CustomLink>
          <CustomLink to="/upcominggames">
            <Tab label="Upcoming games"></Tab>
          </CustomLink>
        </Tabs>
        <div style={{ marginLeft: "1rem" }}>
          <CustomizedBadges />
        </div>

        {/* <Button
          sx={{ marginLeft: "auto" }}
          textColor="inherit"
          variant="contained"
          color="grey"
        >
          Login
        </Button>
        <Button sx={{ marginLeft: "1rem" }} variant="contained" color="grey">
          SignUp
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
