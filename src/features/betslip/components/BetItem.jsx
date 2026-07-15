import { memo } from "react";

const BetItem = ({ bet, onToggle }) => {
  return (
    <div
      onClick={() => onToggle({ id: bet.id })}
      className="flex items-center gap-1 px-3 py-2 border-b border-black-200 cursor-pointer hover:bg-gray-50 text-sm"
    >
      <span>{bet.mbs}</span>
      <span>Kod: {bet.matchId}</span>
      <span>Maç: {bet.matchName}</span>
      <span className="font-extrabold">Oran: {bet.odd}</span>
    </div>
  );
};

export default memo(BetItem);
