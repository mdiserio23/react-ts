import { useContext, useRef } from "react";
import TodoContext from "../../store/todo-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const ctx = useContext(TodoContext);
  const todoRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = todoRef.current!.value;
    if (enteredTodo.trim().length === 0) {
      return;
    }
    ctx.onAddTodo(enteredTodo);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo">New Todo</label>
      <input id="todo" type="input" ref={todoRef} />
      <button>Add To do</button>
    </form>
  );
};

export default NewTodo;
