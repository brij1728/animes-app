import { AnimeCard, AnimeCardProps } from "../AnimeCard";
import {
  selectIsFavouriteAnime,
  toggleFavouriteAnime,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export type AnimeWithActionsProps = AnimeCardProps;

export const AnimeWithActions: React.FC<AnimeWithActionsProps> = (props) => {
  const dispatch = useAppDispatch();
  const onFavouriteClick = () => dispatch(toggleFavouriteAnime(props.anime));

  const isFavourite = useAppSelector((state) =>
    selectIsFavouriteAnime(state, props.anime)
  );

  return (
    <AnimeCard
      {...props}
      isFavourite={isFavourite}
      onFavouriteClick={onFavouriteClick}
    />
  );
};
