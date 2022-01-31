import React from "react";
import Api from "../Api";
import EventCard from "../Components/EventCard";
import { Button } from "antd";

const Event = (props) => {
  return (
    <>
      <div>
        <div className="">
          <h2>Create Event</h2>
          {Api.map((val, ind) => {
            return (
              <EventCard
                key={ind}
                title={val.title}
                detail={val.detail}
                // button={val.button}
              />
            );
          })}
        </div>
        {/* <Button onClick={() => props.handleClick("guest")}>Next</Button> */}
      </div>
      <Button onClick={() => props.handleClick("guest")}>Next</Button>
    </>
  );
};

export default Event;
