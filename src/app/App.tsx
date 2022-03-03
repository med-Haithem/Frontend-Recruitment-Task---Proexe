import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../common/hooks";
import { fetchAllUsers, selectUsers } from "../modules/users/userSlice";

export function App() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  console.log("users", users);

  useEffect(() => {
    dispatch(fetchAllUsers());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Appa = () => <></>;

  return (
    <div className="App">
      <Routes>
        <Route path="/administation/users" element={Appa} />
        <Route path="/" element={<Navigate to="/administation/users" />} />
      </Routes>
    </div>
  );
}
