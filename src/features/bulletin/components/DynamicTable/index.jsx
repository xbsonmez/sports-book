"use client";

import { useState, useMemo } from "react";
import { BULLETIN_MARKET_GROUPS } from "../../constants/bulletinSchema";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";
import TableVirtualRows from "./TableVirtualRows";
import TableSkeleton from "./TableSkeleton";

export const DynamicTable = ({ groups, eventCount, loading }) => {
  const [visibleColumns, setVisibleColumns] = useState(
    BULLETIN_MARKET_GROUPS.reduce((acc, group) => {
      acc[group.ocgId] = group.visible;
      return acc;
    }, {})
  );

  const toggleColumnVisibility = (ocgId) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [ocgId]: !prev[ocgId],
    }));
  };

  const visibleGroups = useMemo(
    () => BULLETIN_MARKET_GROUPS.filter((g) => visibleColumns[g.ocgId]),
    [visibleColumns]
  );

  return (
    <div className="relative text-xs">
      <TableToolbar visible={visibleColumns} onToggle={toggleColumnVisibility} />
      <TableHeader visibleGroups={visibleGroups} eventCount={eventCount} />
      {loading ? (
        <TableSkeleton />
      ) : (
        <TableVirtualRows visibleGroups={visibleGroups} groups={groups} />
      )}
    </div>
  );
};
