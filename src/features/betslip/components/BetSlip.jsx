"use client";

import { useMemo } from "react";
import { useToggleBet } from "../hooks/useToggleBet";
import { useSelector } from "react-redux";
import BetItem from "./BetItem";

const BetSlip = () => {
  const bets = useSelector((state) => state.betslip.bets);
  const toggleBet = useToggleBet();

  const totalOdd = useMemo(() => bets.reduce((acc, b) => acc * parseFloat(b.odd), 1), [bets]);

  return (
    <div className="text-sm border border-gray-300">
      {bets.map((bet, index) => (
        <BetItem key={"betItem" + index + bet.id} bet={bet} onToggle={toggleBet} />
      ))}
      <span className="px-3 py-4 font-normal text-base">
        Toplam Tutar: {totalOdd > 1 ? (Math.floor(totalOdd * 100) / 100).toFixed(2) : 0} TL
      </span>
    </div>
  );
};

export default BetSlip;
