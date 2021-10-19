import React from "react";
import { Row } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import PortalUI from "./portal/format";

function App() {
  return (
    <div className="admin-wrp">
      <Row justify="center" align="middle">
        <PortalUI />
      </Row>
    </div>
  );
}

export default App;