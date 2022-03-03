import { Button, Col, Row, Form, Input, Space, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../..";
import { useAppDispatch } from "../../../../common";

export const UsersAdd = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: any) => {
    dispatch(addNewUser(values));
    notification.open({
      message: "User aded successfully",
      type: "success",
    });
    navigate("/users");
  };
  return (
    <Row>
      <Col span={24}>
        <h3>Add new User</h3>
        <Form
          onFinish={handleSubmit}
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
