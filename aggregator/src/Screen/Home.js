import { useState } from "react";
import { Card } from "antd";
import { Image, Col, Input, Button } from "antd";
import Counter from "../Components/Counter";
import EventPic from "../images/eventimage.png";
import Budgetpic from "../images/Budgetpic.png";
import SelectDate from "../Components/SelectDate";

function Home() {
  const [noc, setnoc] = useState(0);

  const CLick = () => {
    setnoc(noc + 1);
  };
  console.log(noc);
  if (noc == 1) {
    return (
      <>
        <div>
          {/* first card */}
          <Card style={{ width: 300, textAlign: "right" }}>
            <h2>Catering</h2>
            <p>Dummy Data</p>
            <Button
              onClick={(e) => {
                e.preventDefault();
                CLick();
              }}
            >
              NEXT
            </Button>
          </Card>
          {/* second card */}
          <Card style={{ width: 300, textAlign: "right" }}>
            <h2>Photography</h2>
            <p>Dummy Data</p>
            <Button
              onClick={(e) => {
                e.preventDefault();
                CLick();
              }}
            >
              NEXT
            </Button>
          </Card>
          {/* third card */}
          <Card style={{ width: 300, textAlign: "right" }}>
            <h2>Banquet</h2>
            <p>Dummy Data</p>
            <Button
              onClick={(e) => {
                e.preventDefault();
                CLick();
              }}
            >
              NEXT
            </Button>
          </Card>
        </div>
      </>
    );
  } else if (noc == 2) {
    return (
      <>
        <div>
          {" "}
          <Col span={12} offset={6}>
            <div className="div">
              <Image width={200} height={200} src={EventPic} />
              <h2>Select No Of Guest</h2>
              <Counter />
            </div>
          </Col>
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            CLick();
          }}
        >
          NEXT
        </Button>
      </>
    );
  } else if (noc == 3) {
    return (
      <>
        <div>
          <Col span={12} offset={6}>
            <div>
              <Image width={200} height={200} src={Budgetpic} />
              <h2>Your Approximated Budget</h2>
              <Input placeholder="Basic usage" />
            </div>
          </Col>
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            CLick();
          }}
        >
          NEXT
        </Button>
      </>
    );
  } else if (noc == 4) {
    return (
      <>
        <div>
          <div className="DateTime">
            <h2>Select Date And Time</h2>
            <SelectDate />
          </div>
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            CLick();
          }}
        >
          NEXT
        </Button>
      </>
    );
  } else
    return (
      <div className="App">
        <Button
          onClick={(e) => {
            e.preventDefault();
            CLick();
          }}
        >
          GET STARTED
        </Button>
      </div>
    );
}

export default Home;
