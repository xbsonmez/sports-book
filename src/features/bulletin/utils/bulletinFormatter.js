export const groupBulletinItems = (items) => {
  const map = new Map();

  items.forEach((item) => {
    const key = `${item.D}__${item.DAY}__${item.LN}`;
    if (!map.has(key)) {
      map.set(key, { key, date: item.D, day: item.DAY, league: item.LN, matches: [] });
    }

    const odds = {};
    Object.entries(item.OCG || {}).forEach(([groupId, group]) => {
      odds[groupId] = {};
      Object.entries(group.OC || {}).forEach(([ocId, oc]) => {
        odds[groupId][ocId] = oc.O;
      });
    });

    map.get(key).matches.push({
      id: item.C,
      name: item.N,
      time: item.T,
      mbs: item.OCG?.["1"]?.MBS,
      odds,
      extraCount: Object.keys(item.OCG || {}).length,
    });
  });

  return Array.from(map.values());
};
