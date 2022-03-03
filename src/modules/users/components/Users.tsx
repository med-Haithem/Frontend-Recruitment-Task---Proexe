import { Row, Col } from "antd";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchAllUsers } from "..";
import { useAppDispatch } from "../../../common";
import { UsersAdd } from "./add";
import { UsersEdit } from "./edit";
import { UsersList } from "./list";

export const Users = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      <Col span={24}>
        <Routes>
          <Route index element={<UsersList />} />
          <Route path="edit" element={<UsersEdit />} />
          <Route path="add" element={<UsersAdd />} />
        </Routes>
      </Col>
    </Row>
  );
};
