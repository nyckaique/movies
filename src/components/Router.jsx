import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Popular from "../pages/Popular";
import Toprated from "../pages/Toprated";
import Upcoming from "../pages/Upcoming";

export default function Router() {
  return (
    <div>
      <HashRouter basename={"/movies"}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/toprated" element={<Toprated />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
