import * as React from "react";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

import { Anime } from "../../api/types";
import { FavouriteButton } from "../FavouriteButton";

export type AnimeCardProps = {
  anime: Anime;
  isFavourite?: boolean;
  onFavouriteClick?: () => void;
};

export const AnimeCard = ({
  anime,
  isFavourite,
  onFavouriteClick,
}: AnimeCardProps) => {
  const styles = {
    media: {
      height: 200,
    },
  };

  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
              // onClick={onClick}
            >
              {anime.title}
            </Typography>
            <FavouriteButton
              isFavourite={isFavourite}
              onClick={onFavouriteClick}
            />
          </Box>
        }
        sx={{ height: "80px" }}
      />
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
