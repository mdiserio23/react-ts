import Todo from "../../models/todo";
import TodoComponent from "./TodoComponent";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodoComponent key={item.id} id={item.id} text={item.text} />
        ))}
      </ul>
    </>
  );
};
export default Todos;
