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
  const styles = {
    media: {
      height: 350,
    },
  };

  return (
    <Card>
      <CardHeader title={anime.title} />
      <CardMedia
        src="img"
        image={anime.images.jpg.image_url}
        style={styles.media}
      />
      <CardContent>
        <Typography>{anime.rating}</Typography>
        <Typography>{anime.duration}</Typography>
      </CardContent>
    </Card>
  );
};
