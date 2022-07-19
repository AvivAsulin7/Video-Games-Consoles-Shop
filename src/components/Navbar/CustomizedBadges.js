import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductsContext from "../../contexts/ProductsContext";
import { useContext } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "rgb(21, 50, 155)",
  },
}));

const StyledIcon = styled(ShoppingCartIcon)({
  color: "#fff",
});

export default function CustomizedBadges() {
  const { cart, setShowCart } = useContext(ProductsContext);

  return (
    <IconButton aria-label="cart" onClick={() => setShowCart(true)}>
      <StyledBadge badgeContent={cart} color="secondary">
        <StyledIcon />
      </StyledBadge>
    </IconButton>
  );
}
