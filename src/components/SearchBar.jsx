import React from "react";
import { Grid, Autocomplete, TextField } from "@mui/material";
import { coinData } from "../coinSlice";
import { useSelector } from "react-redux";

const SearchBar = () => {
    const apiData = useSelector(coinData);
    const searchOptions = new Set()
    for(let i=0; i<apiData?.data.coins.length; i++){
      searchOptions.add(apiData?.data.coins[i].name);
    }
    const data = [...new Set(searchOptions)];
    console.log(data);
    
  return (
    <Grid container>
      <Grid item xs={6}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Coin Name" />}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
