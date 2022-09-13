import * as React from "react";

import { Box, Grid, Paper, styled } from "@mui/material";

import { Anime } from "../../api/types";
import { AnimeCard } from "../AnimeCard";

type AnimeListProp = {
  animes: Anime[] | undefined;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
              <Item>
                <AnimeCard key={anime.mal_id} anime={anime} />
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
