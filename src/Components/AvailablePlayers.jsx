import React from "react";
import { use } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const playerData = use(playersPromise);
  
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {playerData.map((player) => (
        <PlayerCard
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
