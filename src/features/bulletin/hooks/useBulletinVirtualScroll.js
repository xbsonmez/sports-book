import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";

export function useBulletinVirtualScroll(groups) {
  const listRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (listRef.current) {
        setOffsetTop(listRef.current.getBoundingClientRect().top + window.scrollY);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const flatRows = useMemo(
    () =>
      groups.flatMap((group) => [
        { type: "header", group, key: `header-${group.key}` },
        ...group.matches.map((match) => ({ type: "match", match, key: `match-${match.id}` })),
      ]),
    [groups]
  );

  const virtualizer = useWindowVirtualizer({
    count: flatRows.length,
    estimateSize: () => 30,
    overscan: 10,
    scrollMargin: offsetTop,
  });

  return { listRef, flatRows, virtualizer };
}
