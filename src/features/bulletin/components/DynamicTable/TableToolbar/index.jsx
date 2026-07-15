import { BULLETIN_MARKET_GROUPS } from "@/features/bulletin/constants/bulletinSchema";

export default function TableToolbar({ visible, onToggle }) {
  return (
    <div className="flex gap-1 p-2 flex-wrap border-b bg-gray-50">
      {BULLETIN_MARKET_GROUPS.map((g) => (
        <button
          key={g.ocgId}
          onClick={() => onToggle(g.ocgId)}
          className={`px-2 py-1 border rounded ${
            visible[g.ocgId] ? "bg-gray-800 text-white" : "bg-white text-gray-500"
          }`}
        >
          {g.label}
        </button>
      ))}
    </div>
  );
}
