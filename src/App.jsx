import "./App.css";
import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <h1>Welcome to Rust</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
