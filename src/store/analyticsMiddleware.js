const analyticsMiddleware = () => (next) => (action) => {
  if (action.type === "betslip/addBet") {
    console.log("[Analytics] Bet eklendi:", action.payload);
  } else if (action.type === "betslip/removeBet") {
    console.log("[Analytics] Bet kaldırıldı:", action.payload);
  }
  return next(action);
};

export default analyticsMiddleware;
