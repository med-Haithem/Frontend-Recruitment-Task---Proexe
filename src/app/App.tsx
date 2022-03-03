import { Layout, Menu } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import { Users } from "../modules";
const { Content, Footer, Sider } = Layout;

export function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <h1 className="title">
          <SettingOutlined /> Dashboard
        </h1>
        <Menu theme="dark" defaultSelectedKeys={["users"]} mode="inline">
          <Menu.Item key="users" icon={<UserOutlined />}>
            <Link to={"./users"}>Users</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className="site-layout-content">
          <Routes>
            <Route path="/users/*" element={<Users />} />
            <Route path="/" element={<Navigate to="/users" />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <h3>Frontend Recruitment Task - Proexe</h3>
        </Footer>
      </Layout>
    </Layout>
  );
}
