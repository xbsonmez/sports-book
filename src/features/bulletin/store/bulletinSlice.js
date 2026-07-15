import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBulletin } from "@/features/bulletin/services/bulletinService";

export const fetchBulletin = createAsyncThunk(
  "bulletin/fetchBulletin",
  async () => {
    const response = await getBulletin();
    return response.data;
  },
  {
    condition: (_, { getState }) => {
      const { loading, items } = getState().bulletin;
      return !loading && items.length === 0;
    },
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const bulletinSlice = createSlice({
  name: "bulletin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBulletin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBulletin.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBulletin.rejected, (state, action) => {
        state.loading = false;
        if (action.error.name !== "AbortError") {
          state.error = action.error.message;
        }
      });
  },
});

export default bulletinSlice.reducer;
