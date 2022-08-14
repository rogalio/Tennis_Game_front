import React from "react";
import axios from "axios";
import { addMatchResult } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import GroupPoint from "./GroupPoint";
import { RootState } from "../index";


const listOfPoints = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const players = useSelector((state: RootState) => state.players.value);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  // envoie les infos des joueurs au back et récupère le resultat du match
  const hanleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://tennis-game-back.herokuapp.com/score",
        {
          joueur1: players.joueur1,
          joueur2: players.joueur2,
          points: players.points,
        }
      );
      dispatch(addMatchResult(response.data.match));
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return (
    <>
      {players.joueur1.name && (
        <div className="flex flex-col justify-center max-w-5xl mx-auto  bg-[#1e2e74] w-screen h-screen ">
          <div className="p-2 mx-auto overflow-auto h-80">
            {players.points.map((point) => {
              return (
                <div key={point.i}>
                  <p className="text-white">{`le point${point.i} est remporté par ${point.winner}`}</p>
                  <p className="text-white">
                    Le point{" "}
                    <span className="font-bold text-[#f6a54b] ">{point.i}</span>{" "}
                    est remporté par{" "}
                    <span className="font-bold   text-[#f6a54b]  ">
                      {point.winner}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          <GroupPoint />

          <button
            className="text-white max-w-5xl mt-8  justify-center mx-auto w-36 p-2 2 bg-gradient-to-br from-[#f6a54b] to-[#2bd3cb] rounded-full px-4 hover:opacity-80 hover:shadow-lg transition duration-200  ease-out"
            onClick={hanleSubmit}
          >
            Voir le resultat
          </button>
        </div>
      )}
    </>
  );
};
export default listOfPoints;
