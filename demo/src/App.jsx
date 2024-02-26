import React, { Fragment, useState } from "react";

import BorderWrapper from "./components/BorderWrapper";
import Counter from "./components/Counter";
import CounterHooks from "./components/CounterHooks";
import TaskManager from "./components/TaskManager";
import UseStateDemo from "./components/UseStateDemo";
import UserInfo from "./components/UserInfo";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      {/* <h1>App page</h1>
      <h2>App sub header</h2> */}
      {/* {<Display />} */}
      {/* <BorderWrapper color="red">
        <Welcome program={"Full stack"} name={"vasanth"}>
          <p>This is a child of welcome</p>
        </Welcome>
      </BorderWrapper>
      <br />
      <BorderWrapper color="green">
        <Welcome program={"Data Science"} name={"Kumar"} />
      </BorderWrapper> */}

      {/* <Counter count={10} />
      <CounterHooks /> */}

      {/* <UseStateDemo name="Sachin" /> */}
      {/* <UserInfo /> */}
      <TaskManager />
    </>
  );
}

// A fn should return only 1 HTML tag
// If we need JS inside HTML, wrap with {}
// BorderWrapper -> Higher Order Component (takes one component as a
// param in the form of props.children and returns a new component)

// Webpack is the bundler which collects all files into a single JS file for production
// Babel -> converts JSX to JS

// export function Display() {
//   return (
//     <Fragment>
//       <h1>Display</h1>
//       <h1>Display2</h1>
//     </Fragment>
//   );
// }
export default App;
