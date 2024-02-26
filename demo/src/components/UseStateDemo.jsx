// Hooks - are functions which helps to manage data

// stateless components
// stateful component

// state -> local data
import React, { useEffect, useState } from "react";

import axios from "axios";

function Welcome({ name }) {
  let [batchNo, setBatchNo] = useState(14); // initialData
  const [age, setAge] = useState(10);
  //   if data is undefined, it'll not showup in UI
  //   [state, fnToState] = useState(initialData)

  const handleBatch = async () => {
    setBatchNo((prevBatchNo) => prevBatchNo + 1);
    // setBatchNo((prevBatchNo) => prevBatchNo + 1);
    // setBatchNo((prevBatchNo) => prevBatchNo + 1);
    // console.log("batchno", batchNo);
    // const data = await axios.get(
    //   `https://jsonplaceholder.typicode.com/posts/${batchNo}`
    // );

    // console.log(data);
  };

  // comp..didmount + compdidUpdate + comp.will.unmount
  //   useEffect(() => {
  //     async function display() {
  //       await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  //     }

  //     display();
  //   }, []); // [] -> dependency list -> componentDidMount

  useEffect(() => {
    async function display() {
      await axios.get(`https://jsonplaceholder.typicode.com/posts/${batchNo}`);
    }

    display();
  }, [batchNo]); // componentDidUpdate

  useEffect(() => {
    console.log("age changed", age);
  }, [age]); // componentDidUpdate

  return (
    <>
      <h1>
        Welcome to Pesto - {name}. Your batch is {batchNo} - age {age}
      </h1>
      <button onClick={handleBatch}>change batch</button>
      <button onClick={() => setAge((prevAge) => prevAge + 1)}>
        change age
      </button>
    </>
  );
}

export default Welcome;
