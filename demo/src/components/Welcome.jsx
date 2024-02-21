function Welcome(props) {
  // properties -> Props -> Object -> read only data
  console.log(props);
  //   const { program, name } = props;
  //   props.name = "Undertaker"; // error

  return (
    // <h1>
    //   Welcome to {program} - {name}
    // </h1>
    <>
      <h1>
        Welcome to {props.program} - {props.name}
      </h1>
      {props.children}
    </>
  );
}

export default Welcome;
