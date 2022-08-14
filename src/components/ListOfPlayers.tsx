import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { joueur1Info, joueur2Info, addPoints, resetPoints } from "../redux";

const Players = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const name1:string = watch("name1");
  const name2:string= watch("name2");
  const level1:number = watch("level1");
  const level2:number = watch("level2");

  // enregistr les infos des joueurs
  const onSubmit = (data: any) => {
    dispatch(
      joueur1Info({
        name: data.name1,
        level: data.level1,
      })
    );
    dispatch(
      joueur2Info({
        name: data.name2,
        level: data.level2,
      })
    );

    battle();
  };

  // génère les points en fonction du lvl des joueurs
  const battle = () => {
    dispatch(resetPoints());
    for (let i = 1; i <= 150; i++) {
      const winRate = (level1 - level2) * 5 + 50;
      if (Math.floor(Math.random() * 100) + 1 < winRate) {
        dispatch(addPoints({ i, winner: name1, result: 1 }));
      } else {
        dispatch(addPoints({ i, winner: name2, result: 2 }));
      }
    }
  };

  return (
    <div className="flex flex-col justify-center max-w-5xl pt-20 mx-auto ">
      <h1 className="mx-auto mb-6 text-4xl text-white ">
        Battle <span>⚔️</span>
      </h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center gap-12 mx-auto mt-10">
            {/* joueur 1  */}
            <div className="flex flex-col p-4 rounded-lg shadow-2xl shadow-cyan-500/50 ">
              <h2 className="pb-2 mx-auto text-xl text-white">Joueur 1</h2>
              <input
                className="p-1 pl-4 rounded-full placeholder:italic"
                placeholder="   nom du joueur 1"
                {...register("name1", { required: true })}
              />
              {errors.name1 && (
                <span className="justify-center mx-auto text-red-400 ">
                  nom requis
                </span>
              )}
              <p className="mx-auto mt-4 mb-2 text-xl text-white">
                Niveau <span>{level1}</span>
              </p>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue={1}
                {...register("level1")}
              />
            </div>

            {/* joueur 2  */}
            <div className="flex flex-col p-4 rounded-lg shadow-2xl shadow-cyan-500/50">
              <h2 className="pb-2 mx-auto text-xl text-white">Joueur 2</h2>
              <input
                className="p-1 pl-4 rounded-full placeholder:italic"
                placeholder="   nom du joueur 2"
                {...register("name2", { required: true })}
              />
              {errors.name2 && (
                <span className="justify-center mx-auto text-red-400">
                  nom requis
                </span>
              )}
              <p className="mx-auto mt-4 mb-2 text-xl text-white">
                Niveau {level2}
              </p>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue={1}
                {...register("level2")}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 mx-auto mx-w-5xl">
            <input
              type="submit"
              value="Lancer le duel"
              className="  mt-10 font-semibold hover: mx-auto cursor-pointer h-8  text-white bg-gradient-to-br from-[#f6a54b] to-[#2bd3cb] rounded-full px-4 hover:opacity-80 hover:shadow-lg transition duration-200  ease-out"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Players;
