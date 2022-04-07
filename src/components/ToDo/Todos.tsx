import Todo, { TodosComponent } from "../../models/todo";
import TodoComponent from "./TodoComponent";
import classes from "./Todos.module.css";

const Todos: React.FC<TodosComponent> = (props) => {
  const onRemoveItemHandler = (id: string) : void => {
    props.onRemoveItem(id)
  }
  return (
    <>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodoComponent onRemoveItem={onRemoveItemHandler} key={item.id} id={item.id} text={item.text} />
        ))}
      </ul>
    </>
  );
};
export default Todos;
