import { useToggleBet } from "@/features/betslip/hooks/useToggleBet";
import {
  STATIC_START_COLS,
  STATIC_MIDDLE_COLS,
  STATIC_END_COLS,
} from "@/features/bulletin/constants/bulletinSchema";
import OddGroup from "@/shared/components/OddGroup";

const renderCell = (key, match) => {
  switch (key) {
    case "event":
      return (
        <span>
          <strong>{match.id}</strong> {match.time} {match.name}
        </span>
      );
    case "comments":
      return "Yorumlar";
    case "mbs":
      return match.mbs;
    case "extra":
      return <span className="text-blue-500 cursor-pointer">{match.extraCount}</span>;
    default:
      return null;
  }
};

export default function TableRow({ match, visibleGroups, ref, ...props }) {
  const toggleBet = useToggleBet();
  return (
    <div ref={ref} {...props} className="flex hover:bg-yellow-50 border-b border-gray-200 border-l">
      {STATIC_START_COLS.map((col) => (
        <div key={col.key} className={col.cssClass}>
          {renderCell(col.key, match)}
        </div>
      ))}
      {STATIC_MIDDLE_COLS.map((col) => (
        <div key={col.key} className={col.cssClass}>
          {renderCell(col.key, match)}
        </div>
      ))}

      {visibleGroups.map((market, key) => (
        <OddGroup
          key={`market-${key}-market.${market.ocgId}`}
          market={market}
          match={match}
          onToggle={toggleBet}
        />
      ))}

      {STATIC_END_COLS.map((col) => (
        <div key={col.key} className={col.cssClass}>
          {renderCell(col.key, match)}
        </div>
      ))}
    </div>
  );
}
