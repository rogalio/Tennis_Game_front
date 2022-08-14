import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../index";
import type { Match } from "../redux";


const Result = () => {
  const players = useSelector((state: RootState) => state.players.value);

  const tr = " border-b-[1px] border-gray-600";
  const td = "border-r-[1px] px-6 border-gray-600 ";

  // on remplit le tableau avec les infos du match
  return (
    <div className="flex justify-center mx-auto max-w-5xl mb-10 bg-[#1e2e74] pb-20">
      {players.match.length > 0 && (
        <table className="border-[1px] border-gray-600 text-white">
          <tr className={tr}>
            <td className={td}></td>
            <td className={td}>Set 1</td>
            <td className={td}>Set 2</td>
            <td className={td}>Set 3</td>
            <td className={td}>Current Game</td>
          </tr>
          {players.match.map((result: Match) => {
            return (
              <>
                <tr key={result.nb_points_consumee} className={tr}>
                  <td className={td}>{players.joueur1.name}</td>
                  <td className={td}>{result.sets[0].Jeux_joueur_1}</td>
                  <td className={td}>{result.sets[1].Jeux_joueur_1}</td>
                  <td className={td}>{result.sets[2]?.Jeux_joueur_1}</td>
                  {result.gagnant === 1 && (
                    <td className={td}>{players.joueur1.name} Win</td>
                  )}
                  {result.gagnant === 0 && (
                    <td className={td}>Points consumés</td>
                  )}
                </tr>
                <tr className={tr}>
                  <td className={td}>{players.joueur2.name}</td>
                  <td className={td}>{result.sets[0].Jeux_joueur_2}</td>
                  <td className={td}>{result.sets[1].Jeux_joueur_2}</td>
                  <td className={td}>{result.sets[2]?.Jeux_joueur_2}</td>
                  {result.gagnant === 2 && (
                    <td className={td}>{players.joueur2.name} Win</td>
                  )}
                  {result.gagnant === 0 && (
                    <td className={td}>Points consumés</td>
                  )}
                </tr>
              </>
            );
          })}
        </table>
      )}
    </div>
  );
};

export default Result;
