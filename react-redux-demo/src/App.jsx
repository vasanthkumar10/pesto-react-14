import { Bikes } from "./components/Bikes";
import { Cars } from "./components/Cars";
import { Posts } from "./components/Posts";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>APP component</h1>
        <Cars />
        <Bikes />
        {/* <Posts /> */}
      </div>
    </Provider>
  );
}

export default App;
