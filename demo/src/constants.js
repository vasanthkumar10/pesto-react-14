export const INITIAL_STATE = 10;

// reducer fn -> place where events are defined
// action -> event + payload
export const reducer = (state = INITIAL_STATE, action) => {
  //   console.log("action", action);
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;

    case "DECREMENT":
      return state - action.value;

    case "RESET":
      return INITIAL_STATE;

    case "FACTORIAL":
      let factorial = 1;
      for (let i = 2; i <= action.value; i++) {
        factorial *= i;
      }
      return factorial;

    default:
      return state;
  }
};
