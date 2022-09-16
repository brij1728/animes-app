import { Box, Typography } from "@mui/material";
import { selectFavouriteAnimes, useAppSelector } from "../../store";

import { AnimeList } from "../../components";

export const FavouritesPage = () => {
  const favourites = useAppSelector(selectFavouriteAnimes);
  console.log(favourites);

  if (favourites.length === 0) {
    return <Typography variant="h4">No favourites</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        mx: "5px",
      }}
    >
      <AnimeList animes={favourites} />
    </Box>
  );
};
