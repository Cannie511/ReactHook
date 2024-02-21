import logo from "./logo.svg";
import "./App.css";
import Nav from "./view/Nav";
import { useState, useEffect } from "react";
import Todo from "./view/todo";
import FreeApi from "./view/FreeApi";
function App() {
  let [name, setName] = useState("Cảnh");
  let [address, setAddress] = useState();
  let [todos, setTodo] = useState([
    { id: 1, title: "Cảnh", type: "Canh" },
    { id: 2, title: "Thanh", type: "Cannie" },
    { id: 3, title: "Hoàng", type: "Canh" },
    { id: 4, title: "Nam", type: "Cannie" },
  ]);
  useEffect(() => {
    console.log("update successfully!");
  }, [address]);
  const handleCLick = () => {
    if (!address) {
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 1000 + 1),
      title: address,
      type: "Canh",
    };
    setTodo([...todos, newTodo]);
    setAddress("");
  };
  const handleChangeInput = (event) => {
    setAddress(event.target.value);
  };
  const deleteTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setTodo(currentTodo);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>
          Hello {todos.title}
        </h1>
        <div className="toDoContainer">
          <ul>
            {todos &&
              todos.length > 0 &&
              todos.map((todo) => {
                return <Todo todo={todo} deleteTodo = {deleteTodo}/>;
              })}
              <hr/>
              {todos &&
              todos.length > 0 &&
              todos.map((todo) => {
                return (todo.type === 'Canh' ? <Todo todo={todo} deleteTodo = {deleteTodo} /> : '');
              })}
          </ul>
        </div>
        <input value={address} onChange={(event) => handleChangeInput(event)} />
        <button onClick={() => handleCLick()}>Click here</button> */}
        <FreeApi />
      </header>
    </div>
  );
}

// const HomePage = () => (
//   <div>
//     <h1>Trang Chủ</h1>
//     {/* Nội dung của trang chủ */}
//   </div>
// );

// const LoginPage = () => (
//   <div>
//     <h1>Trang Đăng Nhập</h1>
//     {/* Nội dung của trang đăng nhập */}
//   </div>
// );

// const App = () => {
//   const handleNavigateToLogin = () => {
//     window.location.href = '/login';
//   };

//   return (
//     <div>
//       <button onClick={handleNavigateToLogin}>Đến Trang Đăng Nhập</button>
//       {window.location.pathname === '/login' ? <LoginPage /> : <HomePage />}
//     </div>
//   );
// }
export default App;
