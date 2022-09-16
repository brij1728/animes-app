import { Box, InputBase, alpha, styled } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export type SearchInputProps = {
  placeholder?: string;
  onSubmit?: (value: string) => void;
};

export const SearchInput = ({
  placeholder = "Search...",
  onSubmit,
}: SearchInputProps) => {
  const [value, setValue] = useState("");
  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(value);
    }
  };

  return (
    <form onSubmit={(e) => onSearch(e)}>
      <Box sx={{ flexGrow: 1, pt: 2, pb: 2 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            inputProps={{ "aria-label": "search" }}
            autoComplete="off"
          />
        </Search>
      </Box>
    </form>
  );
};
