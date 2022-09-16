import { Navigate, Route, Routes } from "react-router-dom";

import { FavouritesPage } from "../pages/FavouritePage";
import { Home } from "../pages";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourite" element={<FavouritesPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
