import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoinData } from "../coinSlice";
import { coinData } from "../coinSlice";
import Data from "./Data";

const ColumnName = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinData());
  }, [dispatch]);

  const apiData = useSelector(coinData);

  return (
    <Grid
      container
      sx={{
        textAlign: "justify",
        padding: "100px 125px",
        display: "flex",
        justifyContent: "center",
        color: "white",
        fontWeight: "700",
        margin: "0 20px",
        backgroundColor: "rgb(8 17 29)",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgb(0 0 0 / 50%)",
        maxHeight: "685px",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Grid item xs={2} sm={2}>
        <Typography fontWeight={700}>Asset</Typography>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Typography fontWeight={700}>Symbol</Typography>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Typography fontWeight={700}>Price</Typography>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Typography fontWeight={700}>Change</Typography>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Typography fontWeight={700}>24hr Volume</Typography>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Typography fontWeight={700}>Info</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        // xs={{
        //   backgroundColor: "rgb(8 17 29)",
        //   borderRadius: "10px",
        //   boxShadow: "0 2px 5px rgb(0 0 0 / 50%)",
        // }}
      >
        <Data />
      </Grid>
    </Grid>
  );
};

export default ColumnName;
