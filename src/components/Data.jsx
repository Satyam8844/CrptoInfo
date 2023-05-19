import React from "react";
import { coinData } from "../coinSlice";
import { useSelector } from "react-redux";
import { Grid, Typography, Button } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const Data = () => {
  const apiData = useSelector(coinData);
  console.log(apiData);

  return (
    <>
      {apiData?.data.coins.map((each, index) => {
        return (
          <Grid
            key={index}
            container
            sx={{
              border: "2px #171D2B",
              borderStyle: "solid none",
              padding: "10px 0",
              alignItems: "center",
            }}
          >
            <Grid
              item
              sm={2}
              sx={{
                display: "flex",
                gap: "0 10px",
                justifyContent: "left",
                textAlign: "justify",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxWidth: "30px", width: "100%" }}
                src={each.iconUrl}
                alt="Icon-Img"
              />
              <Typography sx={{ fontWeight: "700", fontSize: "10px" }}>
                {each.name}
              </Typography>
            </Grid>
            <Grid item sm={2}>
              <Typography sx={{ color: "#939699", fontSize: "12px" }}>
                {each.symbol}
              </Typography>
            </Grid>
            <Grid item sm={2}>
              <Typography sx={{ color: "#939699", fontSize: "12px" }}>
                $ {each.price}
              </Typography>
            </Grid>
            <Grid item sm={2}>
              <Typography sx={{ color: "#939699", fontSize: "12px" }}>
                {each.change}
              </Typography>
            </Grid>
            <Grid item sm={2}>
              <Typography sx={{ color: "#939699", fontSize: "12px" }}>
                $ {each?.["24hVolume"]}
              </Typography>
            </Grid>
            <Grid
              item
              sm={2}
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              <LightbulbIcon  color="secondary"/>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default Data;
