import React from "react";
import { Card, Button } from "antd";

const EventCard = (event, props) => {
  return (
    <div>
      <Card style={{ width: 300, textAlign: "right" }}>
        <h2>{event.title}</h2>
        <p>{event.detail}</p>
        {/* <button onClick={() => props.handleClick("guest")}>
          {event.button}
        </button> */}

        <Button onClick={() => props.handleClick("guest")}>Select</Button>
      </Card>
    </div>
  );
};

export default EventCard;
