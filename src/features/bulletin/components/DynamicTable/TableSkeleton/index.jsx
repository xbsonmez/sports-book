import {
  STATIC_START_COLS,
  STATIC_MIDDLE_COLS,
  STATIC_END_COLS,
  BULLETIN_MARKET_GROUPS,
} from "@/features/bulletin/constants/bulletinSchema";

const SKELETON_ROWS = 30;

const allCols = [
  ...STATIC_START_COLS.map((_, i) => ({
    key: `start-${i}`,
    className: STATIC_START_COLS[i].cssClass,
  })),
  ...STATIC_MIDDLE_COLS.map((_, i) => ({
    key: `mid-${i}`,
    className: STATIC_MIDDLE_COLS[i].cssClass,
  })),
  ...BULLETIN_MARKET_GROUPS.flatMap((g) =>
    g.outcomes.map((o) => ({ key: `${g.ocgId}-${o.ocId}`, className: g.cssClass }))
  ),
  ...STATIC_END_COLS.map((_, i) => ({ key: `end-${i}`, className: STATIC_END_COLS[i].cssClass })),
];

export default function TableSkeleton() {
  return (
    <>
      {Array.from({ length: SKELETON_ROWS }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex border-b border-gray-300">
          {allCols.map((col) => (
            <div key={col.key} className={`${col.className}`}>
              <div className={`h-4 bg-gray-200 rounded animate-pulse ${"w-3/4"}`} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
