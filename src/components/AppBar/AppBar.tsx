import * as React from "react";

import {
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

const PAGES: { label: string; link: string }[] = [
  {
    label: "Browse Animes",
    link: "/",
  },
  {
    label: "Your Favorites Animes",
    link: "/favourites",
  },
];

export const AppBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] =
    React.useState<HTMLButtonElement | null>(null);

  const handleOpenNavMenu: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          onClick={() => navigate("/")}
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Animes
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {PAGES.map(({ link, label }) => (
              <MenuItem key={label} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link component={RouterLink} to={link}>
                    {label}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Animes
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {PAGES.map(({ link, label }) => (
            <Button key={label} sx={{ my: 2, display: "block" }}>
              <Link
                sx={{
                  color: "white",
                }}
                onClick={handleCloseNavMenu}
                component={RouterLink}
                to={link}
              >
                {label}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};
