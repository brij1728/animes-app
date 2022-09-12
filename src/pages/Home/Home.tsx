import * as React from "react";

import { AnimeList } from "../../components/AnimeList";
import { AnimeResponse } from "../../api/types";
import { getAnimeData } from "../../api/clients";

export const Home = () => {
  const [animeData, setAnimeData] = React.useState<
    AnimeResponse | null | undefined
  >(null);
  React.useEffect(() => {
    getAnimeData().then((animes) => {
      return setAnimeData(animes);
    });
  }, []);
  return <>{<AnimeList animes={animeData?.data} />}</>;
};
