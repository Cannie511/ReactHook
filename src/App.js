import logo from "./logo.svg";
import "./App.css";
import Nav from "./view/Nav";
import { useState } from "react";
import Todo from "./view/todo";

function App() {
  let [name, setName] = useState("Cảnh");
  let [address, setAddress] = useState();
  let [todos, setTodo] = useState([
    { id: 1, title: "Cảnh" },
    { id: 2, title: "Thanh" },
    { id: 3, title: "Hoàng" },
    { id: 4, title: "Nam" },
  ]);
  const handleCLick = () => {
    if (!address) {
      return;
    }
    let newTodo = { id: "4", title: address };
    setTodo([...todos, newTodo]);
    setAddress("");
  };
  const handleChangeInput = (event) => {
    setAddress(event.target.value);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello ReactHook with {name} - {address}
        </h1>
        <div className="toDoContainer">
          <ul>
            {todos &&
              todos.length > 0 &&
              todos.map((todo) => {
                return <Todo todo={todo} />;
              })}
          </ul>
        </div>
        <input value={address} onChange={(event) => handleChangeInput(event)} />
        <button onClick={() => handleCLick()}>Click here</button>
      </header>
    </div>
  );
}

export default App;
