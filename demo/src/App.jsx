import React, { Fragment, createContext, useState } from "react";

import AxiosDemo from "./components/AxiosDemo";
import BorderWrapper from "./components/BorderWrapper";
import Button from "./components/Button";
import { ComponentA } from "./components/ComponentA";
import ComponentD from "./components/ComponentD";
import Counter from "./components/Counter";
import CounterHooks from "./components/CounterHooks";
import { Parent } from "./components/Parent";
import { ReducerDemo } from "./components/ReducerDemo";
import { ReducerDemo1 } from "./components/ReducerDemo1";
import TaskManager from "./components/TaskManager";
import UseStateDemo from "./components/UseStateDemo";
import UserInfo from "./components/UserInfo";
import Welcome from "./components/Welcome";

export const NameContext = createContext();
export const AgeContext = createContext();

function App() {
  const [name, setName] = useState("Vasi");
  const [age, setAge] = useState(10);

  const incrementAge = () => {
    setAge((prev) => prev + 1);
  };

  const decrementAge = () => {
    setAge((prev) => prev - 1);
  };

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
      {/* <TaskManager /> */}

      {/* value is a keyword */}
      {/* <AgeContext.Provider value={age}> */}
      {/* <NameContext.Provider value={{ name, age }}>
        <ComponentA />
      </NameContext.Provider>
      <NameContext.Provider value={name}>
        <ComponentD />
      </NameContext.Provider>
      <Button text={"increment age"} action={incrementAge} color={"green"} />
      <Button text={"decrement age"} action={decrementAge} color={"red"} /> */}

      {/* </AgeContext.Provider> */}

      {/* <Parent /> */}

      {/* <ReducerDemo />
      <ReducerDemo1 /> */}
      {/* <AxiosDemo /> */}
      <Button text={"increment"} color={"green"} />
    </>
  );
}

// A fn should return only 1 HTML tag
// If we need JS inside HTML, wrap with {}
// BorderWrapper -> Higher Order Component (takes one component as a
// param in the form of props.children and returns a new component)

// Inorder to change parent's state -> pass handler to the child as a prop

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
