"use client";

import { useBulletin } from "@/features/bulletin/hooks/useBulletin";
import { DynamicTable } from "./DynamicTable";

export default function BulletinList() {
  const { groups, eventCount, loading, error } = useBulletin();

  if (error) throw new Error(error);

  return <DynamicTable groups={groups} eventCount={eventCount} loading={loading} />;
}
