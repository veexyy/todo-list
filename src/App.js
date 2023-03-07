import "./App.css";
import ButtonAdd from "./comps/Button";
import Input from "./comps/Input";
import logo from "./comps/cross-circle-svgrepo-com.svg";

function App() {
  return (
    <div className="App">
      <Input />
      <ButtonAdd />
      <div className="tasks">
        <div className="title">Add your first task!</div>
      </div>
    </div>
  );
}

export default App;
