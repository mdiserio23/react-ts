import Todo from "../../models/todo";
import classes from "./TodoComponent.module.css";

const TodoComponent: React.FC<Todo> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};
export default TodoComponent;
