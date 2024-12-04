import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./pages/app/App.tsx";
import UserProfilePage from "./pages/profile/UserProfilePage.tsx";
import PeopleOverviewPage from "./pages/people/PeopleOverviewPage.tsx";
import RoomsOverviewPage from "./pages/rooms/RoomsOverviewPage.tsx";
import RoomDetailPage from "./pages/rooms/RoomDetailPage.tsx";
import RoomCreatePage from "./pages/rooms/RoomCreatePage.tsx";

import { people } from "./assets/persondb.ts";

import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/people" element={<PeopleOverviewPage people={people} />} />
        <Route path="/rooms" element={<RoomsOverviewPage />} />
        <Route path="/rooms/create" element={<RoomCreatePage />} />
        <Route path="/rooms/:roomId" element={<RoomDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
