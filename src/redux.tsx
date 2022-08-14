import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export type joueur = {
  name: string;
  level: number;
};

export type Jeux = {
  Joueur_1_Score: string;
  Joueur_2_Score: string;
  Points_joueur_1: number;
  Points_joueur_2: number;
  decisif: false;
};

export type Sets = {
  Jeux_joueur_1: number;
  Jeux_joueur_2: number;
  Jeux: Jeux;
};

export type Match = {
  Set_joueur_1: number;
  Set_joueur_2: number;
  fin_match: boolean;
  gagnant: number;
  nb_points_consumee: number;
  sets: Sets[];
};

export type Points = {
  i: number;
  winner: string;
  result: number;
};

interface IinitialState {
  value: {
    joueur1: joueur;
    joueur2: joueur;
    points: Points[];
    match: Match[];
  };
}

const initialState: IinitialState = {
  value: {
    joueur1: { name: "", level: 1 },
    joueur2: { name: "", level: 1 },
    points: [],
    match: [],
  },
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    joueur1Info: (state, action: PayloadAction<joueur>) => {
      state.value.joueur1 = action.payload;
    },
    joueur2Info: (state, action: PayloadAction<joueur>) => {
      state.value.joueur2 = action.payload;
    },
    addPoints: (state, action: PayloadAction<Points>) => {
      state.value.points.push(action.payload);
    },
    resetPoints: (state) => {
      state.value.points = [];
    },
    addMatchResult: (state, action: PayloadAction<Match>) => {
      state.value.match = [];
      state.value.match.push(action.payload);
    },
    resetMatchResult: (state) => {
      state.value.match = [];
    },
  },
});

export const {
  joueur1Info,
  joueur2Info,
  addPoints,
  resetPoints,
  addMatchResult,
  resetMatchResult,
} = playersSlice.actions;

export default playersSlice.reducer;
