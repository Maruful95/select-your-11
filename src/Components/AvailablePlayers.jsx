import React from "react";
import { use } from "react";
import playerLogo from "../assets/player-logo.png";
import flagLogo from "../assets/flag.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {playerData.map((player) => (
        <div className="card bg-base-100 shadow-sm p-6 rounded-2xl ">
          <figure>
            <img className="h-60 rounded-2xl"
              src={player.image}
              alt="player"
            />
          </figure>
          <div className="mt-4">
            <div className="flex ">
              <img className="w-7" src={playerLogo} alt="" />
              <h2 className="text-[20px] font-semibold ml-4 ">{player.name}</h2>
            </div>
            <div className="mt-4 flex items-center justify-between border-b-2 border-[#13131310] pb-4">
              <div className="flex items-center text-[#131313a8]">
                <img className="w-5 opacity-50 mr-3" src={flagLogo} alt="" />
                <h2 className="font-normal text-base">{player.country}</h2>
              </div>
              <button className="hover:bg-[#13131320] font-normal text-sm px-4 py-2 bg-[#13131310] rounded-lg">
               {player.role}
              </button>
            </div>
            <div className="flex items-center justify-between font-bold text-base mt-4">
              <span className="">Rating</span>
              <span>{player.rating}</span>
            </div>
            <div className="flex items-center justify-between mt-4 font-semibold text-base">
              <h2 className="">{player.battingStyle}</h2>
              <h2 className=" text-[#131313a8]">{player.bowlingStyle}</h2>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-base font-semibold">
                <span>Price: $</span>
                <span>{player.price}</span>
              </div>
              <button className="btn bg-white rounded-lg">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
