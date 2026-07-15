export const createOddId = (matchId, marketId, oddId) => `${matchId}-${marketId}-${oddId}`;

export const parseOddId = (oddId) => {
  const [matchId, marketId, outcomeId] = oddId.split("-");
  return { matchId, marketId, outcomeId };
};
