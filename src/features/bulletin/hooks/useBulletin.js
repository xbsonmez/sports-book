"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBulletin } from "@/features/bulletin/store/bulletinSlice";
import { groupBulletinItems } from "@/features/bulletin/utils/bulletinFormatter";

export function useBulletin() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.bulletin);

  useEffect(() => {
    dispatch(fetchBulletin());
  }, [dispatch]);

  const groups = useMemo(() => groupBulletinItems(items), [items]);
  const eventCount = useMemo(() => items.length, [items]);

  return { groups, eventCount, loading, error };
}
