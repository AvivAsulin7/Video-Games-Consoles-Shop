import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Divider,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useContext } from "react";
import ProductsContext from "../../contexts/ProductsContext";
import styled from "styled-components";
import { useTheme } from "@mui/material";
import "./Cart.css";

const CustomButton = styled(Button)({
  fontFamily: "Montserrat, sans-serif",
  borderRadius: "10px",
});

function Cart() {
  const {
    productsCart,
    setProductsCart,
    cart,
    setCart,
    showCart,
    setShowCart,
    totalPrice,
    setTotalPrice,
  } = useContext(ProductsContext);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  function removeProduct(item) {
    setCart(cart - 1);
    setTotalPrice(Math.round(totalPrice - item.count * item.price));
    setProductsCart(productsCart.filter((i) => i !== item));
  }

  function UsePlus(item) {
    const found = productsCart.find(
      (product) => product.id === item.id && product.select === item.select
    );
    if (found) {
      setProductsCart(
        productsCart.map((product) =>
          product.id === found.id && product.select === found.select
            ? { ...product, count: product.count + 1 }
            : product
        )
      );
    }
    setTotalPrice(Math.round(totalPrice + item.price));
  }

  function UseMinus(item) {
    const found = productsCart.find(
      (product) => product.id === item.id && product.select === item.select
    );
    if (found) {
      if (found.count > 1)
        setProductsCart(
          productsCart.map((product) =>
            product.id === found.id && product.select === found.select
              ? { ...product, count: product.count - 1 }
              : product
          )
        );
      else removeProduct(item);
      setTotalPrice(Math.round(totalPrice - item.price));
    }
  }

  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: { width: matches ? "100%" : 500, backgroundColor: "#F6F5F5" },
      }}
    >
      {productsCart.length > 0 ? (
        <Box
          sx={{ p: 4 }}
          // display="flex"
          // justifyContent={"center"}
          flexDirection="column"
          alignItems="center"
          backgroundColor="#F6F5F5"
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "1rem",
              fontSize: "3rem",
              fontFamily: "Finlandica, sans-serif",
            }}
          >
            Your Cart
          </h1>

          {productsCart.map((item, index) => {
            return (
              <Box key={index}>
                <Box
                  display="flex"
                  sx={{ pt: 4, pb: 4 }}
                  alignItems="start"
                  justifyContent={"space-between"}
                  padding="10px"
                  backgroundColor="#fff"
                >
                  <Avatar
                    src={item.img}
                    sx={{ width: 96, height: 96, mr: 2 }}
                  ></Avatar>
                  <Box display="flex" flexDirection={"column"} sx={{ pr: 1.5 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: matches ? "1rem" : null,
                        paddingRight: matches ? "0.7rem" : null,
                      }}
                    >
                      {item.name}
                    </Typography>
                    {item.console === "all" ? (
                      <Typography
                        variant="h7"
                        sx={{
                          fontSize: matches ? "0.8rem" : null,
                          paddingTop: matches ? "0.3rem" : null,
                        }}
                      >
                        For {item.select}
                      </Typography>
                    ) : (
                      <Typography
                        variant="h7"
                        sx={{
                          fontSize: matches ? "0.8rem" : null,
                          paddingTop: matches ? "0.3rem" : null,
                        }}
                      >
                        For {item.console}{" "}
                      </Typography>
                    )}

                    <Typography
                      variant="h7"
                      sx={{
                        fontSize: matches ? "0.8rem" : null,
                        paddingTop: matches ? "0.3rem" : null,
                      }}
                    >
                      Price for each:{item.price}$
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      ${Math.round(item.price * item.count)}
                    </Typography>
                    <div className="buttons">
                      <button onClick={() => UseMinus(item)}>-</button>
                      <button>{item.count}</button>
                      <button onClick={() => UsePlus(item)}>+</button>
                    </div>
                    <Box sx={{ pt: 4 }}>
                      <CustomButton
                        variant="contained"
                        sx={{
                          fontSize: matches ? "0.6rem" : null,
                          width: matches ? "1rem" : null,
                        }}
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
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {" "}
          <h1
            style={{
              textAlign: "center",
              padding: "2rem 0 4rem ",
              fontSize: "2.5rem",
              fontFamily: "Finlandica, sans-serif",
            }}
          >
            Your Cart is Empty !
          </h1>{" "}
          <img
            src="./images/emptyCart.png"
            alt=""
            style={{ width: "40%", margin: "auto", paddingBottom: "4rem" }}
          ></img>
        </Box>
      )}
      <Box display="flex" justifyContent={"center"} sx={{ pt: 2 }}>
        <CustomButton onClick={() => setShowCart(false)}>Close</CustomButton>
      </Box>
    </Drawer>
  );
}

export default Cart;
