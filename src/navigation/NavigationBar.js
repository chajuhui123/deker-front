import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar(props) {
  return (
    <>
      <div className="logo" />
      <Menu theme="light" mode="horizontal">
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/signup">
          <Link to="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default NavigationBar;
