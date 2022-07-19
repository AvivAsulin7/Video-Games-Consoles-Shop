import { Drawer, Box, Avatar, Typography, Divider, Button } from "@mui/material";
import { useContext, useState } from "react";
import ProductsContext from "../../contexts/ProductsContext";
import styled from "styled-components";

const CustomButton = styled(Button)({
  fontFamily: "Montserrat, sans-serif",
  borderRadius: "10px",
});

function Cart() {
  const { productsCart, setProductsCart, cart, setCart, showCart, setShowCart, totalPrice, setTotalPrice } =
    useContext(ProductsContext);

  function removeProduct(item) {
    setCart(cart - 1);
    setTotalPrice(Math.round(totalPrice - item.price));
    setProductsCart(productsCart.filter((i) => i !== item));
  }

  return (
    <Drawer open={showCart} onClose={() => setShowCart(false)} anchor="right" PaperProps={{ sx: { width: 500 } }}>
      <Box
        sx={{ p: 4 }}
        // display="flex"
        // justifyContent={"center"}
        flexDirection="column"
        alignItems="center"
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "3rem",
            fontFamily: "Finlandica, sans-serif",
          }}
        >
          Your Cart
        </h1>

        {productsCart.map((item) => {
          return (
            <Box key={item.id}>
              <Box
                display="flex"
                sx={{ pt: 7, pb: 2 }}
                alignItems="start"
                justifyContent={"space-between"}
                padding="10px"
              >
                <Avatar src={item.img} sx={{ width: 96, height: 96, mr: 2 }}></Avatar>
                <Box display="flex" flexDirection={"column"}>
                  <Typography variant="h6">{item.name}</Typography>
                  {item.console === "all" ? (
                    <select style={{ marginTop: "1rem" }}>
                      <option>Console</option>
                      <option>Sony playstation</option>
                      <option>Xbox</option>
                      <option>Ninetendo</option>
                    </select>
                  ) : (
                    <Typography variant="h7">For {item.console} </Typography>
                  )}
                </Box>
                <Box>
                  <Typography variant="body1">${item.price}</Typography>
                  <Box sx={{ pt: 4 }}>
                    <CustomButton
                      variant="contained"
                      onClick={() => {
                        removeProduct(item);
                      }}
                    >
                      Remove
                    </CustomButton>
                  </Box>
                </Box>
              </Box>
              <Divider variant="inset" />
            </Box>
          );
        })}
        <Box display="flex" justifyContent={"center"} sx={{ pt: 4 }}>
          <h2
            style={{
              display: "flex",
              fontFamily: "Finlandica, sans-serif",
              fontSize: "1.7rem",
            }}
          >
            Total Price:{totalPrice}$
          </h2>
        </Box>
        <Box display="flex" justifyContent={"center"} sx={{ pt: 4 }}>
          <CustomButton variant="contained">Procced to payment</CustomButton>
        </Box>
        <Box display="flex" justifyContent={"center"} sx={{ pt: 2 }}>
          <CustomButton onClick={() => setShowCart(false)}>Close</CustomButton>
        </Box>
      </Box>
    </Drawer>
  );
}

export default Cart;
