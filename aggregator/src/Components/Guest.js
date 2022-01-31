import React from "react";
import { Image, Button, Col } from "antd";
import EventPic from "../images/eventimage.png";
import Counter from "./Counter";

const Guest = (props) => {
  return (
    <>
      <Col span={12} offset={6}>
        <div className="div">
          <Image width={200} height={200} src={EventPic} />
          <h2>Select No Of Guest</h2>
          <Counter />

          <Button
            onClick={() => props.handleClick("budget")}
            className=""
            style={{ marginTop: 20 }}
          >
            Next
          </Button>
        </div>
      </Col>
    </>
  );
};

export default Guest;
