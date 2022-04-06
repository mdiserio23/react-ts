import { useRef } from "react";
import { NewTodoComponent } from "../../models/todo";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<NewTodoComponent> = (props) => {
  const todoRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = todoRef.current!.value;
    if (enteredTodo.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredTodo);
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
