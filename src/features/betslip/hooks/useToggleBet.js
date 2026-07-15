"use client";

import { useCallback } from "react";
import { useDispatch, useStore } from "react-redux";
import { addBet, removeBet } from "@/features/betslip/store/betslipSlice";
import { parseOddId } from "@/shared/helper/OddHelper";

export function useToggleBet() {
  const dispatch = useDispatch();
  const store = useStore();

  return useCallback(
    (bet) => {
      const bets = store.getState().betslip.bets;
      const existingBet = bets.find((b) => b.matchId === parseOddId(bet.id).matchId);
      if (existingBet) {
        dispatch(removeBet(existingBet.id));
        if (existingBet.id !== bet.id) {
          dispatch(addBet(bet));
        }
      } else {
        dispatch(addBet(bet));
      }
    },
    [dispatch, store]
  );
}
