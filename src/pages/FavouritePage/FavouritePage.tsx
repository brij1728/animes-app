import { selectFavouriteAnimes, useAppSelector } from "../../store";

import { AnimeList } from "../../components";
import { Typography } from "@mui/material";

export const FavouritesPage = () => {
  const favourites = useAppSelector(selectFavouriteAnimes);
  console.log(favourites);

  if (favourites.length === 0) {
    return <Typography variant="h4">No favourites</Typography>;
  }

  return <AnimeList animes={favourites} />;
};
