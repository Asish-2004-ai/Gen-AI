import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  results: null,
  history: [],
  loading: false,
  error: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    submitQuery: (state, action) => {
      state.query = action.payload;
      state.loading = true;
      state.error = null;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.history.push(state.query);
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { submitQuery, setResults, setError } = querySlice.actions;
export default querySlice.reducer;
