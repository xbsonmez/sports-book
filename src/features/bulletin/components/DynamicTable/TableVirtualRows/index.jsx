"use client";
"use no memo";

import { useBulletinVirtualScroll } from "@/features/bulletin/hooks/useBulletinVirtualScroll";
import TableGroup from "../TableGroup";
import TableRow from "../TableRow";

const TableVirtualRows = ({ visibleGroups, groups }) => {
  const { listRef, flatRows, virtualizer } = useBulletinVirtualScroll(groups);

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const scrollMargin = virtualizer.options.scrollMargin;
  const paddingTop = (virtualItems[0]?.start ?? scrollMargin) - scrollMargin;
  const paddingBottom = totalSize - ((virtualItems.at(-1)?.end ?? scrollMargin) - scrollMargin);

  return (
    <div ref={listRef}>
      {paddingTop > 0 && <div style={{ height: `${paddingTop}px` }} />}
      {virtualItems.map((virtualItem) => {
        const row = flatRows[virtualItem.index];
        if (row.type === "header") {
          return (
            <TableGroup
              key={virtualItem.key}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              group={row.group}
              visibleGroups={visibleGroups}
            />
          );
        }
        return (
          <TableRow
            key={virtualItem.key}
            data-index={virtualItem.index}
            ref={virtualizer.measureElement}
            match={row.match}
            visibleGroups={visibleGroups}
          />
        );
      })}
      {paddingBottom > 0 && <div style={{ height: `${paddingBottom}px` }} />}
    </div>
  );
};

export default TableVirtualRows;
