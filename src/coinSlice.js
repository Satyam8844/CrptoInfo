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
    limit: "300",
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
  isLoading: false,
  filterData: [],
};

export const coinSlice = createSlice({
  name: "coinData",
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      state.searchParam = action.payload;
    },
    filterItem: (state, action) => {
      const { param } = action.payload;
      const filter = state.coinsData?.data.coins.filter((newVal) => {
        let temp =
          typeof newVal.name === "string" ? newVal.name.toLowerCase() : "";
        let tempSearch = typeof param === "string" ? param.toLowerCase() : "";
        return temp.includes(tempSearch);
      });
      state.filterData = filter;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCoinData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.coinsData = action.payload;
    });
  },
});

//export const searchParam = (state) => state.coinData.searchParam;
export default coinSlice.reducer;
export const { searchFilter, filterItem } = coinSlice.actions;
export const coinData = (state) => state.coinData.coinsData;
export const isLoading = (state) => state.coinData.isLoading;
export const filterData = (state) => state.coinData.filterData;
