import { useState } from "react";
import NewTodo from "./components/ToDo/NewTodo";
import Todos from "./components/ToDo/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      text: "React Course",
    },
    {
      id: "2",
      text: "TypeScript course",
    },
  ]);
  const addToDoHandler = (text: string): void => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const onRemoveItemHandler = (id: string): void => {
    setTodos((prevTodo) => prevTodo.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos items={todos} onRemoveItem={onRemoveItemHandler} />
    </div>
  );
}

export default App;
