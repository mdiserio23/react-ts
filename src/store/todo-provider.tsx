import TodoContext from "./todo-context";
import { useState } from "react";
import Todo, { TodoContextInterface } from "../models/todo";

const TodoProvider: React.FC = (props) => {
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
  const addTodoHandler = (text: string): void => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const onRemoveItemHandler = (id: string): void => {
    setTodos((prevTodo) => prevTodo.filter((item) => item.id !== id));
  };

  const contextValue: TodoContextInterface = {
    items: todos,
    onAddTodo: addTodoHandler,
    onRemoveItem: onRemoveItemHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
