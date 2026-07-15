import { memo } from "react";
import { createOddId } from "../helper/OddHelper";
import { useSelector } from "react-redux";

const Odd = ({ match, market, outcome, onToggle }) => {
  const odd = match.odds?.[market.ocgId]?.[outcome.ocId];
  const betId = createOddId(match.id, market.ocgId, outcome.ocId);
  const selected = useSelector((state) => state.betslip.bets.some((b) => b.id === betId));

  return (
    <button
      key={betId}
      onClick={() =>
        odd &&
        onToggle({
          id: betId,
          matchId: match.id,
          matchName: match.name,
          mbs: match.mbs,
          market: market.label,
          outcome: outcome.label,
          odd,
        })
      }
      className={`${market.cssClass} font-medium ${
        odd ? `cursor-pointer ${selected ? "bg-yellow-400" : "hover:bg-yellow-200"}` : ""
      }`}
    >
      {odd ?? ""}
    </button>
  );
};

export default memo(Odd);
