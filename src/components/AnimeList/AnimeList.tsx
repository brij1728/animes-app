import * as React from "react";

import { Box, Grid } from "@mui/material";

import { Anime } from "../../api/types";
// import { AnimeCard } from "../AnimeCard";
import { AnimeWithActions } from "../AnimeWithActions";

type AnimeListProp = {
  animes: Anime[] | undefined;
};

export const AnimeList = ({ animes }: AnimeListProp) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={8}
        width="100%"
        direction="row"
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {animes?.map((anime: Anime, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              {/* <AnimeCard key={anime.mal_id} anime={anime} /> */}
              <AnimeWithActions key={anime.mal_id} anime={anime} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
