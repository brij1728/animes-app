import * as React from "react";

import {
  AnimeList,
  Header,
  PaginationOutlined,
  SearchInput,
} from "../../components";

import { AnimeResponse } from "../../api/types";
import { Box } from "@mui/material";
import { getAnimeData } from "../../api/clients";
import usePagination from "../../hooks/usePagination/usePagination";

const ITEMS_PER_PAGE = 5;

export const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [animeData, setAnimeData] = React.useState<AnimeResponse | null>(null);

  const { currentPage, setCurrentPage, numberOfPages } = usePagination(
    animeData,
    ITEMS_PER_PAGE
  );

  const loadAnimes = React.useCallback(
    (query = "", page = 1) => {
      setLoading(true);
      getAnimeData({ query: query.trim(), page })
        .then((animes) => {
          return setAnimeData(animes);
        })
        .catch(() => {
          setAnimeData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [setLoading, setAnimeData]
  );

  const loadPage = React.useCallback(
    (page: number) => {
      setCurrentPage(page);
      loadAnimes(searchText, page);
    },
    [searchText, loadAnimes, setCurrentPage]
  );

  const onSearchTextChange = React.useCallback(
    (value: string) => {
      setSearchText(value);
      setCurrentPage(1);
      loadAnimes(value, 1);
    },
    [setCurrentPage, loadAnimes]
  );

  // on first load
  React.useEffect(() => {
    loadAnimes();
  }, []);

  return (
    <>
      <Header />
      <Box display="flex" width="100%">
        <SearchInput
          placeholder="Search for Animes ..."
          onSubmit={onSearchTextChange}
        />
      </Box>
      {loading ? <h4>Loading</h4> : <AnimeList animes={animeData?.data} />}
      <PaginationOutlined
        pageCount={numberOfPages}
        currentPage={currentPage}
        onPageChange={loadPage}
      />
    </>
  );
};
