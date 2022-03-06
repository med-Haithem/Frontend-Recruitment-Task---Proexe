import { Row, Col, Form, Input, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {
  formSubmit: (values: any) => void;
  initialValues?: any;
  title: string;
};

export const UserForm = ({ formSubmit, initialValues, title }: Props) => {
  const navigate = useNavigate();

  return (
    <Row>
      <Col span={24}>
        <h3>{title}</h3>
        <Form
          onFinish={formSubmit}
          initialValues={initialValues}
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
          <Form.Item
            rules={[
              { type: "email", required: true, message: "email is required" },
            ]}
            label={"Email"}
            name="email"
          >
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
