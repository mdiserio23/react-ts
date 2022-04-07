import { ITodoComponent } from "../../models/todo";
import classes from "./TodoComponent.module.css";

const TodoComponent: React.FC<ITodoComponent> = (props) => {
  const removeItemHandler = () => {
    props.onRemoveItem(props.id);
  };
  return (
    <li onClick={removeItemHandler} className={classes.item}>
      {props.text}
    </li>
  );
};
export default TodoComponent;
