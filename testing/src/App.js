import { Counter } from "./components/counter/Counter";
import { Welcome } from "./components/welcome/Welcome";

function App() {
  return (
    <div className="App">
      {/* <Welcome />
      <Welcome name="vasi" /> */}
      <Counter />
    </div>
  );
}

export default App;

// TDD -> test driven development
