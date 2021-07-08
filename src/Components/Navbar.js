import { Layout, Menu, Button } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { SIGN_OUT } from "../Redux/Actions";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  HomeOutlined,
  HeartTwoTone,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const Navbar = (props) => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.isLogged);
  const BasketLength = useSelector((state) => state.inBasket).length;
  const handleLogOut = () => {
    dispatch(SIGN_OUT());
    props.history.push("/login");
    localStorage.setItem("loggedIn", false);
  };

  return (
    <Layout
      className="layout"
      style={{ position: "sticky", top: "0", zIndex: "10" }}
    >
      <Header className="header">
        <Menu theme="dark" mode="horizontal">
          {isLogged && (
            <Menu.Item key="1">
              <NavLink to="/home">
                Home
                <HomeOutlined style={{ marginLeft: "5px" }} />
              </NavLink>
            </Menu.Item>
          )}

          {isLogged && (
            <Menu.Item key="2">
              <NavLink to="/about">
                About
                <HeartTwoTone twoToneColor="#eb2f96" />
              </NavLink>
            </Menu.Item>
          )}

          {!isLogged && (
            <Menu.Item key="3">
              <NavLink to="/login">Log In</NavLink>
            </Menu.Item>
          )}

          {isLogged && (
            <Menu.Item key="4" style={{ display: "flex", marginLeft: "auto" }}>
              <NavLink to="/account" style={{ paddingRight: "10px" }}>
                <Button type="dashed">
                  My Account{" "}
                  {BasketLength > 0 && (
                    <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                  )}
                </Button>
              </NavLink>
              {isLogged && (
                <Button
                  type="dashed"
                  onClick={handleLogOut}
                  style={{ marginLeft: "auto" }}
                >
                  Log Out
                </Button>
              )}
            </Menu.Item>
          )}
        </Menu>
      </Header>
    </Layout>
  );
};
export default withRouter(Navbar);
