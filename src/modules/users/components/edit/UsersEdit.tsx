import {
  Alert,
  Button,
  Col,
  Row,
  notification,
  Form,
  Input,
  Space,
} from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { editUser, selectUsers } from "../..";
import { useAppDispatch, useAppSelector } from "../../../../common";

export const UsersEdit = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userID = new URLSearchParams(search).get("id");
  const { data } = useAppSelector(selectUsers);
  const user = data.find((item) => item.id === Number(userID));

  if (!user) {
    return <Alert type="error" message={"user does not exist"} />;
  }

  const handleSubmit = (values: any) => {
    dispatch(editUser({ ...values, id: user.id }));
    notification.open({
      message: "User edited successfully",
      type: "success",
    });
    navigate("/users");
  };

  return (
    <Row>
      <Col span={24}>
        <h3>Edit User with ID {user.id}</h3>
        <Form
          onFinish={handleSubmit}
          initialValues={{
            name: user.name,
            username: user.username,
            email: user.email,
            city: user.address.city,
          }}
          wrapperCol={{
            span: 6,
          }}
          labelCol={{
            span: 10,
          }}
        >
          <Form.Item
            rules={[{ required: true, message: "Name is required" }]}
            label={"Name"}
            name="name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Username is required" }]}
            label={"Username"}
            name="username"
          >
            <Input />
          </Form.Item>
          <Form.Item label={"Email"} name="email">
            <Input type={"email"} />
          </Form.Item>
          <Form.Item label={"City"} name="city">
            <Input />
          </Form.Item>
          <Form.Item
            className="text-align-right"
            wrapperCol={{
              md: {
                offset: 12,
                span: 4,
              },
            }}
          >
            <Space>
              <Button onClick={() => navigate("/users")} danger type="ghost">
                Cancel
              </Button>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
