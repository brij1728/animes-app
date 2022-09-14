import { Pagination, PaginationItem, Stack } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useCallback } from "react";

export type paginationProps = {
  pageCount?: number | undefined;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

export const PaginationOutlined = ({
  pageCount,
  currentPage,
  onPageChange,
}: paginationProps) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<unknown>, page: number) => {
      onPageChange(page);
    },
    [onPageChange]
  );

  return (
    <Stack spacing={2}>
      <Pagination
        page={currentPage}
        count={pageCount}
        onChange={onChange}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};
