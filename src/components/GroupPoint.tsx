import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../index";


// nombre de points par joueur
const GroupPoint = () => {
  const players = useSelector((state:RootState) => state.players.value);

  const group = { player1: 0, player2: 0 };

  players.points.forEach((groupPoint) => {
    if (groupPoint.result === 1) {
      group.player1 += 1;
    } else {
      group.player2 += 1;
    }
  });

  return (
    <div className="flex justify-center max-w-5xl gap-6 mt-4 text-white ">
      <div className="flex justify-center gap-4">
        <p>{players.joueur1.name} :</p>
        <p className="text-[#f6a54b]"> {group.player1} points</p>
      </div>
      <div className="flex justify-center gap-4">
        <p>{players.joueur2.name} :</p>
        <p className="text-[#f6a54b]">{group.player2} points</p>
      </div>
    </div>
  );
};

export default GroupPoint;
