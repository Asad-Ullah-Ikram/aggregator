// import React, { useState } from "react";
// import Start from "../Components/Start";
// import Guest from "../Components/Guest";
// import Event from "../Components/Event";
// import Budget from "../Components/Budget";
// import DateTime from "../Components/DateTime";

// const Home = () => {
//   const [user, setUser] = useState("start");

//   const handleClick = (State) => {
//     setUser(State);
//   };
//   return (
//     <div className="App">
//       {/* <h1>Muntazim</h1> */}

//       {(() => {
//         switch (user) {
//           case "start":
//             return <Start handleClick={handleClick} />;
//           case "event":
//             return <Event handleClick={handleClick} />;

//           case "guest":
//             return <Guest handleClick={handleClick} />;
//           case "budget":
//             return <Budget handleClick={handleClick} />;
//           case "Date_Time":
//             return <DateTime handleClick={handleClick} />;
//           default:
//             return null;
//         }
//       })()}
//     </div>
//   );
// };

// export default Home;
