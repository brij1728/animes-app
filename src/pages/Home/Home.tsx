import * as React from "react";

import { AnimeList, Header, SearchInput } from "../../components";

import { AnimeResponse } from "../../api/types";
import { Box } from "@mui/material";
import { getAnimeData } from "../../api/clients";

export const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [animeData, setAnimeData] = React.useState<
    AnimeResponse | null | undefined
  >(null);

  const searchAnimes = React.useCallback((query = "") => {
    setLoading(true);
    getAnimeData(query.trim())
      .then((animes) => {
        return setAnimeData(animes);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(animeData);

  React.useEffect(() => {
    searchAnimes();
  }, [searchAnimes]);
  return (
    <>
      <Header />
      <Box display="flex" width="100%">
        <SearchInput
          placeholder="Search for Animes ..."
          onSubmit={searchAnimes}
        />
      </Box>
      {loading ? <h4>Loading</h4> : <AnimeList animes={animeData?.data} />}
    </>
  );
};
