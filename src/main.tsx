import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./pages/app/App.tsx";
import UserProfilePage from "./pages/profile/UserProfilePage.tsx";
import PeopleOverviewPage from "./pages/people/PeopleOverviewPage.tsx";
import PeopleDetailPage from "./pages/people/PeopleDetailPage.tsx";
import PersonCreatePage from "./pages/people/PersonCreatePage.tsx";
import RoomsOverviewPage from "./pages/rooms/RoomsOverviewPage.tsx";
import RoomDetailPage from "./pages/rooms/RoomDetailPage.tsx";
import RoomCreatePage from "./pages/rooms/RoomCreatePage.tsx";

import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/people" element={<PeopleOverviewPage />} />
        <Route path="/people/create" element={<PersonCreatePage />} />
        <Route path="/people/:personId" element={<PeopleDetailPage />} />
        <Route path="/rooms" element={<RoomsOverviewPage />} />
        <Route path="/rooms/create" element={<RoomCreatePage />} />
        <Route path="/rooms/:roomId" element={<RoomDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
