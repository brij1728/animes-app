import * as React from "react";

import { Anime } from "../../api/types";
import { AnimeCard } from "../AnimeCard";

type AnimeListProp = {
  animes: Anime[] | undefined;
};

export const AnimeList = ({ animes }: AnimeListProp) => {
  return (
    <>
      {animes?.map((anime: Anime) => {
        return <AnimeCard key={anime.mal_id} anime={anime} />;
      })}
    </>
  );
};
