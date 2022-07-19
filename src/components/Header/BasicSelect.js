import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import ProductsContext from "../../contexts/ProductsContext";

export default function BasicSelect(props) {
  const [age, setAge] = React.useState("");
  const { filterProduct } = useContext(ProductsContext);

  const handleChange = (event) => {
    setAge(event.target.value);
    filterProduct(event.target.value, "console");
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Sony Playstation"}>Sony-PlayStation</MenuItem>
          <MenuItem value={"Xbox"}>Xbox</MenuItem>
          <MenuItem value={"Ninetendo"}>Ninetendo</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
