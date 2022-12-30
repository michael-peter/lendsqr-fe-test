import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Users from "./pages/Users";
import Error404 from "./pages/404";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
