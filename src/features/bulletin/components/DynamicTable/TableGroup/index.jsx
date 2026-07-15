import {
  STATIC_START_COLS,
  STATIC_MIDDLE_COLS,
  STATIC_END_COLS,
} from "@/features/bulletin/constants/bulletinSchema";

export default function TableGroup({ group, visibleGroups, ref, ...props }) {
  return (
    <div ref={ref} {...props} className="flex border-b border-gray-200 border-l">
      <div className={`${STATIC_START_COLS[0].cssClass} font-semibold truncate`}>
        {group.date} {group.day} {group.league}
      </div>
      {STATIC_MIDDLE_COLS.map((col) => (
        <div key={col.key} className={col.cssClass}>
          {col.label}
        </div>
      ))}
      {visibleGroups.map((g) =>
        g.outcomes.map((o) => (
          <div key={`${g.ocgId}-${o.ocId}`} className={g.cssClass}>
            {o.label}
          </div>
        ))
      )}
      {STATIC_END_COLS.map((col) => (
        <div key={col.key} className={col.cssClass}>
          {col.label}
        </div>
      ))}
    </div>
  );
}
