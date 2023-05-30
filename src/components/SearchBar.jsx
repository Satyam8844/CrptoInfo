import React from "react";
import { Grid, Autocomplete, TextField } from "@mui/material";
import { coinData } from "../coinSlice";
import { useSelector } from "react-redux";

const SearchBar = () => {
    const apiData = useSelector(coinData);
  return (
    <Grid container > 
      <Grid item xs={6}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={apiData?.data.coins}
          sx={{ width: 300}}
          renderInput={(params) => <TextField {...params} label="Coin Name" sx={{color: 'white', borderColor: 'white'}} />}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
