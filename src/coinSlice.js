import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "942673c39amsh85700617a91a510p1999f3jsn4343da569c82",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export const fetchCoinData = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const response = await axios.request(options);
    const data = await response.data;
    return data;
  }
);

const initialState = {
  coinsData: null,
};

export const coinSlice = createSlice({
  name: "coinData",
  initialState,
  reducers: {},
  extraReducers : (builder)  => {
    builder.addCase(fetchCoinData.fulfilled, (state,action) => {
        state.coinsData = action.payload
    })
}
});

export const coinData = state => state.coinData.coinsData;
export default coinSlice.reducer;
