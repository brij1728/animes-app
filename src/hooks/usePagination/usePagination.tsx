import { useMemo, useState } from "react";
import { AnimeResponse } from "../../api/types";

const usePagination = (data: AnimeResponse | null, _itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = useMemo(
    () => data?.pagination?.last_visible_page || 1,
    [data]
  );

  return {
    currentPage,
    setCurrentPage,
    numberOfPages,
  };
};

export default usePagination;
