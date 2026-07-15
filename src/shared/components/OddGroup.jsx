import { memo } from "react";
import { createOddId } from "../helper/OddHelper";
import Odd from "./Odd";

const OddGroup = ({ market, match, onToggle }) => {
  return market.outcomes.map((outcome) => {
    return (
      <Odd
        key={createOddId(match.id, market.ocgId, outcome.ocId)}
        match={match}
        market={market}
        outcome={outcome}
        onToggle={onToggle}
      />
    );
  });
};

export default memo(OddGroup);
