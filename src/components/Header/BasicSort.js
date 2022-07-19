import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import ProductsContext from "../../contexts/ProductsContext";

export default function BasicSort(props) {
  const [age, setAge] = React.useState("");
  const { sortProducts } = useContext(ProductsContext);

  const handleChange = (event) => {
    setAge(event.target.value);
    sortProducts();
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={"Featured"}>Featured</MenuItem>
          <MenuItem value={"High to Low"}>High to Low</MenuItem>
          <MenuItem value={"Low to High"}>Low to High</MenuItem>
          <MenuItem value={"A-Z"}>A-Z</MenuItem>
          <MenuItem value={"Z-A"}>Z-A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
