import * as React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

import { Anime } from "../../api/types";

type AnimeCardProps = {
  anime: Anime;
};

export const AnimeCard = ({ anime }: AnimeCardProps) => {
  return (
    <Card>
      <CardHeader title={anime.title} />
      <CardMedia image={anime.images.image_url} />
      <CardContent>
        <Typography>{anime.rating}</Typography>
      </CardContent>
    </Card>
  );
};
