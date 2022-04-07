import { TodoContextInterface } from "../models/todo";
import React from "react";

const TodoContext = React.createContext<TodoContextInterface>({
  items: [],
  onAddTodo: (text: string) => {},
  onRemoveItem: (id: string) => {},
});

export default TodoContext;
