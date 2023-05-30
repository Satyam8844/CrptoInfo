import { Grid } from "@mui/material";
import "./App.css";
import ColumnName from "./components/ColumnName";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Grid container className="App">
      <Grid xs={6}>
        <SearchBar />
      </Grid>
      <Grid xs={12}>
        <ColumnName />
      </Grid>
    </Grid>
  );
}

export default App;
