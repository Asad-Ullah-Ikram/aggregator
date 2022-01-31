import React from "react";
import { Button } from "antd";
import SelectDate from "./SelectDate";

const DateTime = (props) => {
  return (
    <>
      <div>
        <div className="DateTime">
          <h2>Select Date And Time</h2>
          <SelectDate />
          <Button onClick={() => props.handleClick("start")}>Next</Button>
        </div>
      </div>
    </>
  );
};

export default DateTime;
