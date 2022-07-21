import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const CustomLink = styled(Link)({
  textDecoration: "none",
});

const CustomButton = styled(Button)({
  color: "#fff",
  borderRadius: "15px",
  "&:hover": {
    color: "black",
    transition: "all .3s ease-in-out",
    backgroundColor: "#FF6701",
  },
});

const CustomListItemText = styled(ListItemText)({
  color: "#fff",
  padding: "1px",
  "&:hover": {
    color: "#FF6701",
    transition: "all .3s ease-in-out",
  },
});

const PAGES = [
  { title: "Home", to: "/" },
  { title: "Products", to: "/products" },
  { title: "Upcoming Games", to: "/upcominggames" },
  { title: "Login", to: "/" },
  { title: "SignUp", to: "/" },
];

function DrawerNav() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { backgroundColor: "#040303" } }}
      >
        <List>
          {PAGES.map((page, index) => (
            <CustomLink to={page.to} key={index}>
              <ListItemButton>
                <ListItemIcon>
                  <CustomListItemText>{page.title}</CustomListItemText>
                </ListItemIcon>
              </ListItemButton>
            </CustomLink>
          ))}
          <ListItemButton
            onClick={() => setOpenDrawer(!openDrawer)}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <ListItemIcon>
              <CustomListItemText>
                <CustomButton>Close</CustomButton>
              </CustomListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "#fff" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        {" "}
        <MenuIcon />{" "}
      </IconButton>
    </React.Fragment>
  );
}

export default DrawerNav;
