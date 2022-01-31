import React from "react";
import { Image, Input, Col, Button } from "antd";
import Budgetpic from "../images/Budgetpic.png";

const Budget = (props) => {
  return (
    <>
      <Col span={12} offset={6}>
        <div>
          <Image width={200} height={200} src={Budgetpic} />
          <h2>Your Approximated Budget</h2>
          <Input placeholder="Basic usage" />

          <Button
            onClick={() => props.handleClick("Date_Time")}
            style={{ marginTop: 20 }}
          >
            Next
          </Button>
        </div>
      </Col>
    </>
  );
};

export default Budget;
