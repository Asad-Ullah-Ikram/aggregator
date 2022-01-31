import React, { useState } from "react";
import DateMomentUtils from "@date-io/moment";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

// import "./App.css";

function SelectDate() {
  const [currentDate, setCurrentData] = useState(new Date());
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <DatePicker value={currentDate} onChange={setCurrentData} />
        <TimePicker value={currentDate} onChange={setCurrentData} />
        <DateTimePicker value={currentDate} onChange={setCurrentData} />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default SelectDate;
