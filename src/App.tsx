import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard";
import Teams from "./pages/teams";
import Players from "./pages/players";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="times" element={<Teams />} />
        <Route path="jogadores" element={<Players />} />
      </Route>
    </Routes>
  );
};

export default App;
