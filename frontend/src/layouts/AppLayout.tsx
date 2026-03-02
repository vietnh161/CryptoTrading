import React from "react";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
