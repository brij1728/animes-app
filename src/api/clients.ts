import { ANIME_BASE_URL } from "./constants";
import { AnimeResponse } from "./types";

export const getAnimeData = async (query = '') => {
  const url = `${ANIME_BASE_URL}?q=${query}&sfw`;
  const data: AnimeResponse = await fetch(url).then(
    (res: Response) => res.json()
  );

  return data;
};
