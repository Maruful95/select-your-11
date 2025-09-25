import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers";
import Navbar from "./Components/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="flex items-center justify-between max-w-7xl mx-auto mb-7">
        <h1 className="font-bold text-[28px]">Available Players</h1>
        <div className="text-base font-normal text-[#13131380]">
          <button
            onClick={() => setToggle(true)}
            className={`${
              toggle === true ? "bg-[#E7FE29] font-bold text-black" : ""
            } border-1 border-[#13131310] border-r-0 px-7 py-2 rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`${
              toggle === false ? "bg-[#E7FE29] font-bold text-black" : ""
            } border-1 border-[#13131310] border-l-0 px-7 py-2 rounded-r-xl`}
          >
            Selected<span>(0)</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
