import "./App.css";
import { Users } from "../modules";
import { CommonLayout } from "../common";
import { Routes, Route, Navigate } from "react-router-dom";

export function App() {
  return (
    <CommonLayout>
      <Routes>
        <Route path="/users/*" element={<Users />} />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </CommonLayout>
  );
}
