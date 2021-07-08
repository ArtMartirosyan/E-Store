import React, { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Modal, Button, Form, Input, Checkbox, Carousel, Image } from "antd";
import { useDispatch } from "react-redux";
import { SIGN_IN } from "../Redux/Actions";

const LogIn = (props) => {
  const contentStyle = {
    height: "160px",
    color: "#ff4d4f",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    fontSize: "25px",
  };
  const [loginData, setloginData] = useState({
    email: null,
    password: null,
  });
  const [isLoginDataIncorrect, setIsLoginDataIncorrect] = useState(false);
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  };
  const handleLogIn = () => {
    fetch("http://localhost:3001/admin")
      .then((res) => res.json())
      .then((data) => {
        if (
          data.email === loginData.email &&
          data.password === loginData.password
        ) {
          setIsModalVisible(false);
          dispatch(SIGN_IN());
          window.localStorage.setItem("loggedIn", true);
        } else {
          setIsLoginDataIncorrect(true);
        }
      });
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <div style={{ height: "100vh" }}>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>Up To 65% Discount on Holidays</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Best Designer Brands Outlet</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Refer A Friend And Save 15%</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Free Shipping Any 2+ Items</h3>
        </div>
      </Carousel>
      <Button
        onClick={showModal}
        block
        type="danger"
        style={{ height: "50px" }}
      >
        Log In
      </Button>
      <Modal
        title="Please Log In"
        visible={isModalVisible}
        onOk={() => handleLogIn()}
        onCancel={handleCancel}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Item>
          {isLoginDataIncorrect && (
            <h4 style={{ color: "red" }}>Incorrect username or password</h4>
          )}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={() => handleLogIn()}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          width={"100vw"}
          height={"70vh"}
          src="https://media-exp1.licdn.com/dms/image/C4E1BAQHvkwzS5W4hZQ/company-background_10000/0/1553003213537?e=2159024400&v=beta&t=6XFhSpCrYAuxVyL7qxMGf-roTrEHpfGD3t4RBB_ZZo0"
        />
      </div>
    </div>
  );
};

export default LogIn;
