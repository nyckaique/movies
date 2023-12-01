import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Popular from "../pages/Popular";
import Toprated from "../pages/Toprated";
import Upcoming from "../pages/Upcoming";

export default function Router() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/movies" element={<Home />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/toprated" element={<Toprated />} />
          <Route path="/movies/upcoming" element={<Upcoming />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
