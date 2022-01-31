import React from "react";

const Start = (props) => {
  return (
    <div>
      {" "}
      <div className="Start">
        {/* <h2>This is the start page</h2> */}
        <button onClick={() => props.handleClick("event")}>Get Started</button>
      </div>
    </div>
  );
};

export default Start;
