import { Box, CssBaseline } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppBar } from "../components";
import { FavouritesPage } from "../pages/FavouritePage";
import { Home } from "../pages";

export const RouteComponent = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <AppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<FavouritesPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </>
  );
};
