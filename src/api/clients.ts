import { ANIME_BASE_URL } from "./constants";
import { AnimeResponse } from "./types";

export const getAnimeData = async () => {
  const data: AnimeResponse = await fetch(ANIME_BASE_URL).then(
    (res: Response) => res.json()
  );
  return data;
};
