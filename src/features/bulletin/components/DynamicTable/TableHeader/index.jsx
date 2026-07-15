import { memo, useMemo } from "react";
import {
  STATIC_START_COLS,
  STATIC_MIDDLE_COLS,
  STATIC_END_COLS,
} from "@/features/bulletin/constants/bulletinSchema";

const TableHeader = ({ visibleGroups, eventCount }) => {
  const tableHeaderSchema = useMemo(
    () => [
      ...STATIC_MIDDLE_COLS,
      ...visibleGroups.flatMap((g) => g.outcomes.map((o) => ({ ...o, cssClass: g.cssClass }))),
      ...STATIC_END_COLS,
    ],
    [visibleGroups]
  );

  return (
    <div className="sticky top-0 z-10 bg-[#d8d0d0] flex w-full text-center border-y border-l border-gray-300 text-xs py-[10px]">
      {STATIC_START_COLS.map((col) => (
        <div key={col.key} className={col.cssClass} style={{ textAlign: "center" }}>
          {col.label}: {eventCount || " "}
        </div>
      ))}

      {tableHeaderSchema.map((col, index) => (
        <div key={`${"table-header" + (col.key ?? col.ocId)}-${index}`} className={col.cssClass}>
          {col.label}
        </div>
      ))}
    </div>
  );
};

export default memo(TableHeader);
