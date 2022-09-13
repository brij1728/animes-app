import * as React from "react";

import { AnimeList, Header } from "../../components";

import { AnimeResponse } from "../../api/types";
import { getAnimeData } from "../../api/clients";

export const Home = () => {
  const [animeData, setAnimeData] = React.useState<
    AnimeResponse | null | undefined
  >(null);
  console.log(animeData);
  React.useEffect(() => {
    getAnimeData().then((animes) => {
      return setAnimeData(animes);
    });
  }, []);
  return (
    <>
      <Header />
      {<AnimeList animes={animeData?.data} />}
    </>
  );
};
