import NewTodo from "./components/ToDo/NewTodo";
import Todos from "./components/ToDo/Todos";
import TodoProvider from "./store/todo-provider";

function App() {
  return (
    <TodoProvider>
      <NewTodo />
      <Todos />
    </TodoProvider>
  );
}

export default App;
