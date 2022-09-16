import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Anime } from "../api/types";
import { RootState } from "./types";

const initialState: Anime[] = [];

export const favouriteAnimesSlice = createSlice({
  name: "favouriteAnimes",
  initialState,
  reducers: {
    toggleFavouriteAnime: (state, action: PayloadAction<Anime>) => {
      const anime = action.payload;
      const index = state.findIndex((a) => a.mal_id === anime.mal_id);
      if (index === -1) {
        return [...state, anime];
      } else {
        return state.filter((a) => a.mal_id !== anime.mal_id);
      }
    },
    clearFavouriteAnimes: () => [],
  },
});

export const { toggleFavouriteAnime, clearFavouriteAnimes } =
  favouriteAnimesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFavouriteAnimes = (state: RootState) =>
  state.favouriteAnimes;
export const selectIsFavouriteAnime = (state: RootState, anime: Anime) =>
  state.favouriteAnimes.findIndex((a) => a.mal_id === anime.mal_id) > -1;

export const favouriteAnimesReducer = favouriteAnimesSlice.reducer;
