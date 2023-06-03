import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { searchFilter, filterItem } from "../coinSlice";
import { coinData } from "../coinSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const apiData = useSelector(coinData);

  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    dispatch(searchFilter(event.target.value));
    dispatch(filterItem({ param: event.target.value }));
  };

  const handlePriceSorting = () => {
      let sortPrice = [];
      for(let i=0; i<apiData?.data.coins; i++){
        sortPrice.push(parseFloat(apiData?.data.coins[i].price));
      }
      console.log(sortPrice);
      sortPrice.sort((a, b) => a - b);
      console.log(sortPrice);
  }

  return (
    <Grid
      container
      columnGap={2}
      sx={
        {
          //display: "flex",
          padding: "50px",
        }
      }
    >
      <Grid item xs={6} sm={6}>
        <TextField
          label="Coin Name"
          onChange={handleChange}
          value={query}
          id="outlined-basic"
          variant="outlined"
          sx={{
            maxWidth: "500px",
            width: "100%",
            "& label.MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
            },
            "& input.MuiInputBase-input": {
              color: 'white'
            }
          }}
        />
      </Grid>
      <Grid item xs={2} sm={2}>
        <Button variant="outlined" onClick={handlePriceSorting}>Sort By Price</Button>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Button variant="outlined">Sort By MarketCap</Button>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Button variant="outlined">Sort By Volume</Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
