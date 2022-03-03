import { Button, Col, Modal, Row, Table, notification } from "antd";
import {
  ExclamationCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { selectUsers, deleteUser } from "../..";
import { useAppSelector, useAppDispatch } from "../../../../common";
import { Address, I_USER } from "../../../../types";

export const UsersList = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const [deleteModal, setDeleteModal] = useState(false);
  const [seletedUserId, setSelectedUserId] = useState<null | Number>(null);

  const toggleDeleteModal = (id?: number) => {
    setDeleteModal(!deleteModal);
    setSelectedUserId(id != null ? id : null);
  };

  const confirmDeleteUser = () => {
    if (seletedUserId != null) {
      dispatch(deleteUser({ id: seletedUserId }));
      notification.open({
        message: "User Deleted successfully",
        type: "success",
      });
    }
    toggleDeleteModal();
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",

      align: "center",
    },
    {
      title: "Username",
      dataIndex: "username",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a: I_USER, b: I_USER) => {
        if (a.username < b.username) {
          return -1;
        }
        if (a.username > b.username) {
          return 1;
        }
        return 0;
      },
      key: "username",
      align: "center",
    },
    {
      title: "City",
      dataIndex: "address",
      align: "center",

      key: "address",
      render: (address: Address) => address.city,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Edit",
      key: "edit",
      align: "center",

      render: (_: any, record: I_USER) => (
        <Link to={`./edit?id=${record.id}`}>
          <Button
            style={{
              backgroundColor: "orange",
            }}
            type="primary"
            icon={<EditOutlined />}
          >
            Edit
          </Button>
        </Link>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      align: "center",
      render: (_: any, record: I_USER) => (
        <Button
          onClick={() => toggleDeleteModal(record.id)}
          danger
          icon={<DeleteOutlined />}
          type="primary"
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <h2>Users List</h2>
      </Col>
      <Col span={12} className="text-align-right">
        <Link to={"./add"}>
          <Button icon={<UserAddOutlined />} size="large" type="primary">
            Add new User
          </Button>
        </Link>
      </Col>
      <Col span={24}>
        <Table
          columns={columns as any}
          rowKey={"id"}
          dataSource={users.data}
          bordered
          loading={users.loading}
        />
      </Col>
      {deleteModal && (
        <Modal
          title={`Delete User with ID ${seletedUserId}`}
          visible={deleteModal}
          onOk={confirmDeleteUser}
          onCancel={() => toggleDeleteModal()}
          okText="Delete"
          cancelText="Cancel"
          okButtonProps={{
            danger: true,
            type: "primary",
            icon: <DeleteOutlined />,
          }}
        >
          Do you confirm deleting this user{" "}
          <ExclamationCircleOutlined color="red" />
        </Modal>
      )}
    </Row>
  );
};
