import React from "react";
import binImg from "../assets/recycle-bin.png";

const SelectedPlayers = ({ selectedPlayers, removeSelectedPlayer }) => {
  const handleRemove = (player) => {
    removeSelectedPlayer(player);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {selectedPlayers.map((player) => (
        <div className="flex items-center justify-between p-5 border-1 border-[#13131318] rounded-2xl mb-4">
          <div className="flex items-center gap-5">
            <img className="w-20 h-20 rounded-2xl" src={player.image} alt="" />
            <div>
              <h2 className="font-semibold text-2xl mb-2">{player.name}</h2>
              <p className="text-base font-normal text-[#13131360]">
                {player.role}
              </p>
            </div>
          </div>
          <div onClick={() => handleRemove(player)}>
            <img className="w-6" src={binImg} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;
