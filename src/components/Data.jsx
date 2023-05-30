import React from "react";
import { coinData, isLoading } from "../coinSlice";
import { useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { RotateSpinner } from "react-spinners-kit";

const Data = () => {
  const apiData = useSelector(coinData);
  const loading = useSelector(isLoading);
  console.log(apiData);

  const loader = <Grid container>
    <Grid item sm={12} sx={{ justifyContent: "center", display: 'flex', margin: '225px' }}>
      <RotateSpinner size={70}/>
    </Grid>
  </Grid>

  const redTriangle = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-triangle" viewBox="0 0 16 16" id="IconChangeColor" transform="scale(1, -1)"> <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" id="mainIconPathAttribute" stroke-width="0" stroke="#ea3110" fill="#f10909" filter="url(#shadow)"></path> <filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black"></feDropShadow></filter></svg>
  const greenTriangle = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-triangle" viewBox="0 0 16 16" id="IconChangeColor" transform="scale(1,1)"> <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" id="mainIconPathAttribute" stroke-width="0" stroke="#1dcb1a" fill="green" filter="url(#shadow)"></path> <filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black"></feDropShadow></filter></svg>

  const renderData = apiData?.data.coins.map((each, index) => {
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
              <Typography sx={{ color: "#939699", fontSize: "12px", alignItems: 'center', display: 'flex', gap: '0 5px' }}>
                {parseFloat(each.change) > 0 ? greenTriangle : redTriangle}{each.change}
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
              <Button variant="outlined">
                <LightbulbIcon  color="primary"/>
              </Button>
            </Grid>
          </Grid>
        );
      });

  return (
   <>{loading ? loader : renderData}</>
  );
};

export default Data;
