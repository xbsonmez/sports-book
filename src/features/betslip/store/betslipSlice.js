import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bets: [],
};

const betslipSlice = createSlice({
  name: "betslip",
  initialState,
  reducers: {
    addBet: (state, action) => {
      state.bets.push(action.payload);
    },
    removeBet: (state, action) => {
      state.bets = state.bets.filter((bet) => bet.id !== action.payload);
    },
  },
});

export const { addBet, removeBet } = betslipSlice.actions;
export default betslipSlice.reducer;
