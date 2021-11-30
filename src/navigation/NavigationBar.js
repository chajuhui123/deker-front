import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar(props) {
  return (
    <>
      <div className="logo" />
      <Menu theme="light" mode="horizontal">
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/test">Test</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default NavigationBar;
