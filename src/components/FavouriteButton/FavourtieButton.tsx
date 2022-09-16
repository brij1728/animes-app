import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

export type FavouriteButtonProps = {
  isFavourite?: boolean;
  onClick?: () => void;
};

export const FavouriteButton: React.FC<FavouriteButtonProps> = ({
  isFavourite,
  onClick,
}) => {
  return (
    <IconButton
      sx={{ flexShrink: 1, color: isFavourite ? red[600] : undefined }}
      onClick={onClick}
      aria-label="add to favourites"
    >
      <FavoriteIcon />
    </IconButton>
  );
};
